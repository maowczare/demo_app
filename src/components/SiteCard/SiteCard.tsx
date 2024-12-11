import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface SiteCard {
  category?: string;
  danger?: string;
  url?: string;
  id_number?: string;
  image_url?: string;
  latitude?: string;
  longitude?: string;
  site?: string;
  description?: string;
}

export const SiteCard = ({
  category,
  url = "",
  image_url,
  latitude,
  longitude,
  site = "",
  description,
}: SiteCard) => {
  return (
    <div className="border p-4 rounded-lg flex flex-row gap-4">
      <div className="flex flex-col gap-4">
        <div className="w-[120px] h-[120px] flex-shrink-0">
          {image_url ? (
            <Image
              src={image_url}
              alt={site}
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          ) : null}
        </div>
        <Button variant="link" asChild>
          <Link
            href={`https://maps.google.com/?q=${latitude},${longitude}`}
            target={"_blank"}
          >
            Navigate
          </Link>
        </Button>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <h2
            className="font-semibold"
            dangerouslySetInnerHTML={{
              __html: site || "",
            }}
          />
          <Badge variant="secondary">{category}</Badge>
        </div>
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{
            __html: description || "",
          }}
        />
        <Button variant="outline" className="mt-2" asChild>
          <Link href={url} target={"_blank"}>
            View Details
          </Link>
        </Button>
      </div>
    </div>
  );
};
