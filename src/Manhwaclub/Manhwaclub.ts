import {
    ContentRating,
    LanguageCode,
    SourceInfo,
    TagType
} from 'paperback-extensions-common'
import {
    getExportVersion,
    Madara
} from '../Madara'

const DOMAIN = 'https://manhwaclub.net'

export const ManhwaclubInfo: SourceInfo = {
    version: getExportVersion('0.0.2'),
    name: 'ManhwaClub',
    description: 'Extension that pulls from Manhwaclub',
    author: 'IvanMatthew',
    authorWebsite: 'https://github.com/IvanMatthew',
    icon: 'icon.png',
    contentRating: ContentRating.ADULT,
    websiteBaseURL: DOMAIN,
    sourceTags: [
        {
            text: 'Notifications',
            type: TagType.GREEN
        },
        {
            text: '18+',
            type: TagType.YELLOW
        },
    ],
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI
}

export class Manhwaclub extends Madara {

    baseUrl: string = DOMAIN

    languageCode: LanguageCode = LanguageCode.ENGLISH

    override hasAdvancedSearchPage = true

    override sourceTraversalPathName = 'manga'

    override searchMangaSelector = 'div.c-tabs-item > div.row'

    override userAgent = false
}
