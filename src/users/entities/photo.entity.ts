import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    url: string 

    @Column()
    mimeType: string

        
    @ManyToOne(()=> User, user=>user.photos)
    user: User
}
