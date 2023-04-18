import {PodcastPage} from "@/view/podcast";
import {PodcastFactoryRepository} from "@/lib/podcast/infrastructure/podcast.factory.repository";
import {NextPageContext} from "next";

export async function getServerSideProps({res}: NextPageContext) {
  // @ts-ignore
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const episodes = await PodcastFactoryRepository.getInstance().getPublishedEpisodesSorted()

  return {
    props: {
      episodes,
    }
  }
}

export default PodcastPage;
