import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import Image from "next/image";

countries.registerLocale(enLocale);

export default function CountryFlag({ countryName }: { countryName: string }) {
  const countryCode = countries.getAlpha2Code(countryName, "en");

  if (!countryCode) {
    return <span>🏳️ {countryName}</span>; // fallback
  }

  return (
    <Image
      src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
      alt={`${countryName} flag`}
      width={15}
      height={7}
      className="h-[10px] ml-[20px]"
      style={{ objectFit: "cover" }}
    />
  );
}
