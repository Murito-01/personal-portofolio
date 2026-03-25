import type { Certificate } from "@/types";
import { certificates as defaultCertificates } from "@/data/certificates";

export type CertificatesProps = {
  certificates?: Certificate[];
};

export default function Certificates({
  certificates = defaultCertificates,
}: CertificatesProps) {
  return (
    <section id="certificates" className="w-full py-14">
      <div className="mx-auto w-full max-w-5xl px-5">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
          Certificates
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {certificates.map((c) => (
            <article
              key={c.id}
              className="rounded-2xl border border-black/5 bg-white p-6 dark:bg-black dark:border-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {c.issuer}
                  </p>
                </div>
                {c.year ? (
                  <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    {c.year}
                  </span>
                ) : null}
              </div>

              {c.credentialUrl ? (
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex h-9 items-center rounded-full border border-black/10 bg-transparent px-4 text-sm font-medium text-zinc-900 transition-colors hover:bg-black/5 dark:border-white/15 dark:text-zinc-100 dark:hover:bg-white/5"
                >
                  View credential
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

