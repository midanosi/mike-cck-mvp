/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2t6gtt0gq6g5m59")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "axnbc6nl",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nmjpy3i5",
    "name": "email",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ds07cs9c",
    "name": "phone_number",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "llyzsqeb",
    "name": "method_to_receive_meal",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "delivery",
        "pickup"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ms5pv5oa",
    "name": "delivery_address",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zypghuvr",
    "name": "pluscode",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sp0ng85i",
    "name": "allergens_intolerances",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dl6n9zjf",
    "name": "field",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Thursday",
        "Sunday"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yukj5j64",
    "name": "not_at_home_instructions",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e6zmzy1i",
    "name": "misc_delivery_instructions",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yuh0hs5w",
    "name": "misc_notes",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tgfdtonu",
    "name": "when_to_start_delivering",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jnmm9g8m",
    "name": "when_to_stop_delivering",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vg9cieqi",
    "name": "notify_dish_of_the_day",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ppcdjbob",
    "name": "cancellation_reason",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2t6gtt0gq6g5m59")

  // remove
  collection.schema.removeField("axnbc6nl")

  // remove
  collection.schema.removeField("nmjpy3i5")

  // remove
  collection.schema.removeField("ds07cs9c")

  // remove
  collection.schema.removeField("llyzsqeb")

  // remove
  collection.schema.removeField("ms5pv5oa")

  // remove
  collection.schema.removeField("zypghuvr")

  // remove
  collection.schema.removeField("sp0ng85i")

  // remove
  collection.schema.removeField("dl6n9zjf")

  // remove
  collection.schema.removeField("yukj5j64")

  // remove
  collection.schema.removeField("e6zmzy1i")

  // remove
  collection.schema.removeField("yuh0hs5w")

  // remove
  collection.schema.removeField("tgfdtonu")

  // remove
  collection.schema.removeField("jnmm9g8m")

  // remove
  collection.schema.removeField("vg9cieqi")

  // remove
  collection.schema.removeField("ppcdjbob")

  return dao.saveCollection(collection)
})
