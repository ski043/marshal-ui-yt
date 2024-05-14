"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { categoryItems } from "../lib/categroyItems";
import { useState } from "react";

export function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  return (
    <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <input type="hidden" name="category" value={selectedCategory || ""} />
      {categoryItems.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card
            className={
              selectedCategory === item.name
                ? "border-primary border-2"
                : "border-2 border-primary/10"
            }
            onClick={() => setSelectedCategory(item.name)}
          >
            <CardHeader>
              {item.image}
              <h3 className="font-medium">{item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
