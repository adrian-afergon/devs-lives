import {PodcastNotionRepository} from "@/lib/podcast/infrastructure/podcast.notion.repository";
import {PodcastRepository} from "@/lib/podcast/domain/podcast.repository";

export class PodcastFactoryRepository {
    static getInstance(): PodcastRepository {
        switch (process.env.STORAGE) {
            case 'notion':
                return new PodcastNotionRepository()
            default:
                return new PodcastNotionRepository()
        }
    }
}
