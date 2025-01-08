"use client";
import { PropertyListItem } from "./PropertyListItem";
import { useEffect, useState } from "react";
import { apiService } from "@/app/services/apiService";

export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
};

interface PropertyListProps {
  landlord_id?: string | null;
}

export const PropertyList: React.FC<PropertyListProps> = ({ landlord_id }) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  let url = "/api/properties";

  if (landlord_id) {
    url += `?landlord_id=${landlord_id}`;
  }

  const getProperties = async () => {
    const tmpProperties = await apiService.get(url);

    setProperties(tmpProperties.data);
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      {properties.map((property) => {
        return <PropertyListItem key={property.id} property={property} />;
      })}
    </>
  );
};
