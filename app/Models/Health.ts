import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Health extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public gender: string

  @column()
  public age: number

  @column()
  public hypertension: number

  @column()
  public heart_disease: number

  @column()
  public ever_married: number

  @column()
  public work_type: string

  @column()
  public Residence_type: string

  @column()
  public avg_glucose_level: number

  @column()
  public bmi: number

  @column()
  public smoking_status: string

  @column()
  public stroke: number
}
