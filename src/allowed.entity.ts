import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm"

import { Events } from "./models/event.entity"

import { Users } from "./models/user.entity"

@Entity()
export class Presences extends BaseEntity {}
