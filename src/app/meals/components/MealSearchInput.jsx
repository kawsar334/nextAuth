"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MealSearchInput() {
  //   const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    router.push(url);
  }, [search]);
  return (
    <div className="flex justify-center mt-4">
      <input
        className="text-black  border-[1px]  px-2  rounded py-2  focus:border-teal focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search "
      />
    </div>
  );
}
