import supabase from "@/supabase";

export const fetchImages = async () => {
  const { data, error } = await supabase.storage
    .from("Narendra Bhondekar")
    .list("gallery", {
      limit: 30,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (error) {
    console.error("Error fetching images:", error);
    return [];
  }

  const images = data.map((image) => {
    const url = supabase.storage
      .from("Narendra Bhondekar")
      .getPublicUrl("gallery/" + image.name);

    return url.data.publicUrl;
  });

  return images;
};
