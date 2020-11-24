import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { DiscInfo } from "../entity/Disc";
import disc from "./discinfo.json";

export default class CreateArtistAndDisks implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {

    await connection
    .createQueryBuilder()
    .insert()
    .into(DiscInfo)
    .values(
      [{
        "artist": "Dua Lipa",
        "release": 2019,
        "disc": "Don't Start Now (Purple Disco Machine Remix)",
        "genre":"Disco POP",
        "youtube":"https://www.youtube.com/watch?v=hPIeXI_cxkU",
        "cover":"https://img.discogs.com/eS_d_8yyZxrW8IpvhRqaJJJdcMc=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14677745-1579451343-3636.jpeg.jpg"
      }]
    )
    .execute()
  }
} 