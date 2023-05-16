import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Floor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {
        default: ''
    })
    nombre: string;
    
    @Column('text', {
        default: ''
    })
    lote: string;
    
    @Column('text', {
        default: ''
    })
    origen: string;
    
    @Column('text', {
        default: ''
    })
    url: string;
    
    @Column('text', {
        default: ''
    })
    Ubicacion: string;
    
    @Column('text', {
        default: ''
    })
    fechaSiembra: string;
    
    @Column('text', {
        default: ''
    })
    fechaSie: string;

    
}
