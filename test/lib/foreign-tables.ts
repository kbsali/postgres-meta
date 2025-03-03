import { pgMeta } from './utils'

test('list', async () => {
  const res = await pgMeta.foreignTables.list()
  expect(res.data?.find(({ name }) => name === 'foreign_table')).toMatchInlineSnapshot(
    { id: expect.any(Number) },
    `
    Object {
      "columns": Array [
        Object {
          "comment": null,
          "data_type": "bigint",
          "default_value": null,
          "enums": Array [],
          "format": "int8",
          "id": "16434.1",
          "identity_generation": null,
          "is_generated": false,
          "is_identity": false,
          "is_nullable": true,
          "is_unique": false,
          "is_updatable": true,
          "name": "id",
          "ordinal_position": 1,
          "schema": "public",
          "table": "foreign_table",
          "table_id": 16434,
        },
        Object {
          "comment": null,
          "data_type": "text",
          "default_value": null,
          "enums": Array [],
          "format": "text",
          "id": "16434.2",
          "identity_generation": null,
          "is_generated": false,
          "is_identity": false,
          "is_nullable": true,
          "is_unique": false,
          "is_updatable": true,
          "name": "name",
          "ordinal_position": 2,
          "schema": "public",
          "table": "foreign_table",
          "table_id": 16434,
        },
        Object {
          "comment": null,
          "data_type": "USER-DEFINED",
          "default_value": null,
          "enums": Array [
            "ACTIVE",
            "INACTIVE",
          ],
          "format": "user_status",
          "id": "16434.3",
          "identity_generation": null,
          "is_generated": false,
          "is_identity": false,
          "is_nullable": true,
          "is_unique": false,
          "is_updatable": true,
          "name": "status",
          "ordinal_position": 3,
          "schema": "public",
          "table": "foreign_table",
          "table_id": 16434,
        },
      ],
      "comment": null,
      "id": Any<Number>,
      "name": "foreign_table",
      "schema": "public",
    }
  `
  )
})
