import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Device {
    
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
    humo: string;
    
    @Column('text', {
        default: ''
    })
    fecha: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    time: Date;

    @Column('boolean', {
        default: false
    })
    state: boolean;
    
}
