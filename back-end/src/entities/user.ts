import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm'
import * as bcrypt from 'bcryptjs'
import { AppRoles } from '../util/Roles'

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  email?: string

  @Column()
  userName?: string

  @Column()
  password?: string

  @Column()
  passwordConfirm?: string

  @Column({
    type: 'enum',
    enum: AppRoles,
    array: true,
    default: [AppRoles.USER],
  })
  roles?: AppRoles

  @BeforeInsert()
  async beforeInsert() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 12) // Hash the password
    }
  }

  public async correctPassword(candidatePassword: string, userPassword: string): Promise<boolean> {
    return await bcrypt.compare(candidatePassword, userPassword)
  }
}
