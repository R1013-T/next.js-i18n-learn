import Link from "next/link";
import { getTranslation } from "../i18n/server";
import LanguageSwitcher from "./_components/language-switcher";

export default async function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  const { t } = await getTranslation(lang);

  return (
    <main className="h-dvh flex items-center justify-center">
      <div className="">
        <h1>i18n Learn</h1>
        <p>lang: {lang}</p>
        <p>{t("app_name")}</p>
        <p>{t("greeting")}</p>
        <br />
        <Link
          href={`/${lang}/about`}
          className="font-semibold text-blue-500 underline hover:text-blue-700"
        >
          {t("about")}
        </Link>
        <br />
        <br />
        <Link
          href={`/ja`}
          className="font-semibold text-blue-500 underline hover:text-blue-700"
        >
          日本語
        </Link>
        <br />
        <Link
          href={`/en`}
          className="font-semibold text-blue-500 underline hover:text-blue-700"
        >
          English
        </Link>
      </div>
    </main>
  );
}
