import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    url: string 

    @Column()
    mimeType: string

        
    @Column()
    userId: number 
}
