import axios from "axios";
import * as cheerio from "cheerio";

interface MetaInfo {
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
}

export default async function getMetaInfo(url: string): Promise<MetaInfo> {
  try {
    const { data } = await axios.get(`/api/proxy?url=${url}`);
    const $ = cheerio.load(data);

    const title = $("head title").text() ?? '';
    const description = $('meta[name="description"]').attr('content') ?? $('meta[property="og:description"]').attr('content') ?? '';
    const image = $('meta[property="og:image"]').attr('content') ?? ''; 
    const favicon = $('link[rel="icon"]').attr('href') ?? $('link[rel="shortcut icon"]').attr('href') ?? '';

    return {
      title: title,
      description: description,
      image: image,
      favicon: favicon
    }
  } catch (error) {
    return {};
  }
}
