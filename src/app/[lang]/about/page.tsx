import { getTranslation } from "@/app/i18n/server";
import Link from "next/link";

export default async function About({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  const { t } = await getTranslation(lang);

  return (
    <main className="h-dvh flex items-center justify-center">
      <div className="">
        <p>{t("greeting")}</p>
        <br />
        <Link
          href={`/${lang}`}
          className="font-semibold text-blue-500 underline hover:text-blue-700"
        >
          {t("home")}
        </Link>
      </div>
    </main>
  );
}
