"use client";

import { useMemo, useState } from "react";
import { dimensions } from "./data/resources";

export default function Page() {
  const [activeDimension, setActiveDimension] = useState(dimensions[0].id);
  const [search, setSearch] = useState("");

  const selectedDimension =
    dimensions.find((dimension) => dimension.id === activeDimension) || dimensions[0];

  const filteredResources = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return selectedDimension.resources;
    }

    return selectedDimension.resources.filter((resource) =>
      [
        resource.title,
        resource.type,
        resource.source,
        resource.description,
      ].some((value) => value.toLowerCase().includes(query))
    );
  }, [search, selectedDimension]);

  const totalResources = dimensions.reduce(
    (total, dimension) => total + dimension.resources.length,
    0
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full sky-600 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full sky-600 blur-3xl" />
      </div>

      {/* Header */}
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">

            <div>
              <h1 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                The Agent Compendium
              </h1>

              <p className="hidden text-xs text-slate-500 sm:block">
                at the Duke TRUST Lab
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm text-slate-500 md:flex">
            <span>{dimensions.length} dimensions</span>

            <span className="h-4 w-px bg-slate-200" />

            <span>{totalResources} resources</span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">

        {/* Hero */}
        <section className="mb-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">

          {/* Hero content */}
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            A resource for
              <span className="block text-sky-600">
                AI agenticness.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              The Agent Compendium is a continually growing collection of
              criteria, metrics, benchmarks, and approaches for defining AI
              agents.
            </p>

            {/* Search */}
            <div className="mt-7 max-w-2xl">
              <div className="group relative">

                <svg
                  className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition group-focus-within:text-sky-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-4-4" />
                </svg>

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder={`Search ${selectedDimension.name}...`}
                  className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  aria-label="Search resources"
                />

              </div>
            </div> {/* End search bar div */}
          </div> {/* End hero content div */}

          {/* Hero image */}
          <div className="relative hidden lg:block">

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-xl shadow-slate-200/70">
              <img
                src="/agent_img.jpeg"
                alt="Agenticness framework diagram"
                className="h-[320px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div> {/* End hero image div */}

          </div>
        </section>


        {/* Dimension navigation */}
        <section className="mb-10">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Browse by dimension
            </p>

            <p className="text-xs text-slate-400">
              {filteredResources.length} results
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm sm:grid-cols-3 lg:grid-cols-5">
            {dimensions.map((dimension) => {
              const isActive = activeDimension === dimension.id;

              return (
                <button
                  key={dimension.id}
                  onClick={() => {
                    setActiveDimension(dimension.id);
                    setSearch("");
                  }}
                  className={`group rounded-xl px-3 py-3 text-left transition ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="min-w-0">
                      <span className="block truncate text-xs font-bold sm:text-sm">
                        {dimension.name}
                      </span>

                      <span
                        className={`mt-0.5 block text-[10px] ${
                          isActive ? "text-slate-300" : "text-slate-400"
                        }`}
                      >
                        {dimension.resources.length} resources
                      </span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Selected dimension */}
        <section>
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="flex items-center gap-4">

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                  {selectedDimension.name}
                </h3>

                <p className="mt-1 max-w-xl text-sm text-slate-500">
                  {selectedDimension.description}
                </p>
              </div>
            </div>

            <div className="hidden text-right sm:block">
              <p className="text-2xl font-bold text-slate-900">
                {selectedDimension.resources.length}
              </p>

              <p className="text-xs text-slate-400">
                available resources
              </p>
            </div>
          </div>

          {/* Component cards */}
          {filteredResources.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {filteredResources.map((resource) => (
                <article
                  key={resource.id}
                  className="group flex min-h-[260px] flex-col rounded-2xl border border-slate-200 bg-[#f4e9dc] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-sky-600 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {resource.type}
                    </span>
                  </div>

                  <div className="mt-5">
                    <h4 className="text-lg font-bold tracking-tight text-slate-900 transition group-hover:text-sky-600">
                      {resource.title}
                    </h4>

                    <p className="mt-1.5 text-xs font-medium text-slate-400">
                      {resource.source}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      {resource.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-6">
                    <a
                      href={resource.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 transition hover:gap-3"
                    >
                      View resource
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl">
                🔎
              </div>

              <h4 className="mt-4 font-bold text-slate-900">
                No resources found
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                Try searching for something else.
              </p>

              <button
                onClick={() => setSearch("")}
                className="mt-5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-slate-700"
              >
                Clear search
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>The Agent Compendium</p>
        </div>
      </footer>
    </div>
  );
}