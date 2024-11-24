import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({ searchParams }: any) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: "55",
  //     _id: 1,
  //     description: "This is description",
  //     author: { id: 1, name: "Adrian" },
  //     image:
  //       "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?t=st=1732116951~exp=1732120551~hmac=3458dff9b35ee4b542da9cf861aacfe89dd85acd106b9087e797dde4d976edd8&w=900",
  //     category: "Robots",
  //     title: "We Robots",
  //   },

  //   {
  //     _createdAt: new Date(),
  //     views: "55",
  //     _id: 2,
  //     description: "This is description",
  //     author: { id: 1, name: "Adrian" },
  //     image:
  //       "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?t=st=1732116951~exp=1732120551~hmac=3458dff9b35ee4b542da9cf861aacfe89dd85acd106b9087e797dde4d976edd8&w=900",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  // ];
  console.log;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br /> Connect with business
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas , Vote on Pitches, and get noticed in Virtual
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 grid grid-cols-12 gap-5">
          {posts?.length > 0 ? (
            posts.map((post: any) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
