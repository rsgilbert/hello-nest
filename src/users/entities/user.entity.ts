import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Photo } from "./photo.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string 

    @Column()
    lastName: string  

    @Column({ default: true })
    isActive: boolean 

    
    @OneToMany(type => Photo, photo => photo.user, { eager: true})
    photos: Photo[]

}
