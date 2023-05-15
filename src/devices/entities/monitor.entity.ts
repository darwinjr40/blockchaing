import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Monitor {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {
        default: ''
    })
    temp: string;
    
    @Column('text', {
        default: ''
    })
    hum: string;
    
    @Column('text', {
        default: ''
    })
    tiempo: string;
    
    @Column('text', {
        default: ''
    })
    time: string;
    
    @Column('text', {
        default: ''
    })
    deviceId: string;
    
}
