import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm"

import { Events } from "./event.entity"

import { Users } from "./user.entity"

@Entity()
export class Presences extends BaseEntity {}
