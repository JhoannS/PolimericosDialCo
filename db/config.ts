import { defineDb, defineTable, column } from 'astro:db';

const Rol = defineTable({
  columns: {
    rolId: column.number({ primaryKey: true, unique: true }),
    rolName: column.text(),
  }
});

const User = defineTable({
  columns: {
    userId: column.number({ primaryKey: true, unique: true }),
    name: column.text(),
    email: column.text({unique: true}),
    password: column.text(),
    created: column.date(),
    rol_id: column.number({ references: () => Rol.columns.rolId, nullable: true })
  }
});

export default defineDb({
  tables: { User, Rol}
})