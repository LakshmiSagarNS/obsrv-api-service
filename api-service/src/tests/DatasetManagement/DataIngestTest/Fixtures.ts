export const TestInputsForDataIngestion = {
    INVALID_REQUEST_BODY: {
      "event": {}
    },
    INDIVIDUAL_EVENT: {
      "id": "api.data.in",
      "ver": "1.0",
      "ts": "1711966306164",
      "params": {
        "msgid": "e180ecac-8f41-4f21-9a21-0b3a1a368917"
      },
      "data": {
        "eid": "INTERACT",
        "date": "2022-01-01",
        "ver": "3.0",
        "syncts": 1668591949682,
        "ets": 1668591949682
      }
    },
    SAMPLE_INPUT_1: {
      "id": "api.data.in",
      "ver": "1.0",
      "ts": "1711966306164",
      "params": {
        "msgid": "e180ecac-8f41-4f21-9a21-0b3a1a368917"
      },
      "data": [{ "context": { "transaction_id": "3d3bac46-d252-4da0-9290-afdd524d0214", "country": "IND", "bpp_id": "becknify.humbhionline.in.mobility.BPP/beckn_open/app1-succinct-in", "city": "std:080", "message_id": "52dcf5a9-8986-47ff-a9d0-f380b23e3dfe", "core_version": "0.9.1", "ttl": "PT1M", "bap_id": "mobilityreferencebap.becknprotocol.io", "domain": "nic2004:60221", "bpp_uri": "https://becknify.humbhionline.in/mobility/beckn_open/app1-succinct-in/bpp", "action": "on_status", "bap_uri": "https://mobilityreferencebap.becknprotocol.io", "timestamp": "2023-02-22T19:06:27.887Z" }, "message": { "order": { "quote": { "breakup": [{ "price": { "currency": "INR", "value": "58.2936244525222" }, "type": "item", "title": "Fare" }, { "price": { "currency": "INR", "value": "10.492852401453995" }, "type": "item", "title": "Tax" }], "price": { "currency": "INR", "value": "68.7864768539762" } }, "provider": { "locations": [{ "gps": "12.973437,77.608771", "id": "./mobility/ind.blr/17@taxi.becknprotocol.io.provider_location" }], "id": "./mobility/ind.blr/7@taxi.becknprotocol.io.provider", "descriptor": { "images": ["https://taxi.becknprotocol.io/companies/view/7"], "name": "Best Taxies" }, "categories": [{ "id": "./mobility/ind.blr/1@taxi.becknprotocol.io.category", "descriptor": { "name": "Premium Taxi" } }], "items": [{ "category_id": "./mobility/ind.blr/1@taxi.becknprotocol.io.category", "price": { "currency": "INR", "value": "68.7864768539762" }, "descriptor": { "images": ["https://taxi.becknprotocol.io/resources/images/car.png"], "code": "Premium Taxi-FuelType:Diesel,Make:Maruti,NameOfModel:Brezza,VehicleType:Premium Taxi", "name": "Premium Taxi-FuelType:Diesel,Make:Maruti,NameOfModel:Brezza,VehicleType:Premium Taxi" }, "id": "./mobility/ind.blr/17@taxi.becknprotocol.io.item", "fulfillment_id": "./mobility/ind.blr/6285@taxi.becknprotocol.io.fulfillment", "tags": { "NameOfModel": "Brezza", "VehicleType": "Premium Taxi", "Make": "Maruti", "FuelType": "Diesel" } }] }, "id": "./mobility/ind.blr/6285@taxi.becknprotocol.io.order", "state": "Awaiting Driver acceptance", "fulfillment": { "agent": { "phone": "+919082233441", "name": "Michel MJ" }, "start": { "location": { "gps": "12.973437,77.608771" } }, "end": { "location": { "gps": "12.935193,77.624481" } }, "id": "./mobility/ind.blr/6285@taxi.becknprotocol.io.fulfillment", "vehicle": { "registration": "KA 05 3456" }, "customer": { "person": { "name": "./Rajat/Mr./Rajat/ /Kumar/" }, "contact": { "phone": "+919867654322", "email": "er.rjtkumar@gmail.com" } } }, "items": [{ "category_id": "./mobility/ind.blr/1@taxi.becknprotocol.io.category", "price": { "currency": "INR", "value": "68.7864768539762" }, "descriptor": { "images": ["https://taxi.becknprotocol.io/resources/images/car.png"], "code": "Premium Taxi-FuelType:Diesel,Make:Maruti,NameOfModel:Brezza,VehicleType:Premium Taxi", "name": "Premium Taxi-FuelType:Diesel,Make:Maruti,NameOfModel:Brezza,VehicleType:Premium Taxi" }, "id": "./mobility/ind.blr/17@taxi.becknprotocol.io.item", "fulfillment_id": "./mobility/ind.blr/6285@taxi.becknprotocol.io.fulfillment", "tags": { "NameOfModel": "Brezza", "VehicleType": "Premium Taxi", "Make": "Maruti", "FuelType": "Diesel" } }], "billing": { "address": { "country": "IND", "door": "MBT", "city": "std:080", "area_code": "560078", "name": "RajatKumar", "locality": "", "building": ",A33" }, "phone": "+919867654322", "name": "./Rajat/Mr./Rajat/ /Kumar/", "email": "er.rjtkumar@gmail.com" } } } }, { "context": { "domain": "nic2004:60221", "country": "IND", "city": "std:080", "core_version": "0.9.1", "action": "track", "bap_id": "mobilityreferencebap.becknprotocol.io", "bap_uri": "https://mobilityreferencebap.becknprotocol.io", "bpp_id": "becknify.humbhionline.in.mobility.BPP/beckn_open/app1-succinct-in", "bpp_uri": "https://becknify.humbhionline.in/mobility/beckn_open/app1-succinct-in/bpp", "transaction_id": "3d3bac46-d252-4da0-9290-afdd524d0214", "message_id": "b52878f3-28ed-4c31-8ebb-8989f33c3220", "timestamp": "2023-02-22T19:07:07.887Z", "ttl": "PT1M" }, "message": { "order_id": "./mobility/ind.blr/6285@taxi.becknprotocol.io.order" } }]
    },
    SAMPLE_INPUT: {
      "id": "api.data.in",
      "ver": "1.0",
      "ts": "1711966306164",
      "params": {
        "msgid": "e180ecac-8f41-4f21-9a21-0b3a1a368917"
      },
      "data": [{ "context": { "transaction_id": "3d3bac46-d252-4da0-9290-afdd524d0214", "country": "IND", "bpp_id": "becknify.humbhionline.in.mobility.BPP/beckn_open/app1-succinct-in", "city": "std:080", "message_id": "52dcf5a9-8986-47ff-a9d0-f380b23e3dfe", "core_version": "0.9.1", "ttl": "PT1M", "bap_id": "mobilityreferencebap.becknprotocol.io", "domain": "nic2004:60221", "bpp_uri": "https://becknify.humbhionline.in/mobility/beckn_open/app1-succinct-in/bpp", "action": "on_status", "bap_uri": "https://mobilityreferencebap.becknprotocol.io", "timestamp": "2023-02-22T19:06:27.887Z" }, "message": { "order": { "quote": { "breakup": [{ "price": { "currency": "INR", "value": "58.2936244525222" }, "type": "item", "title": "Fare" }, { "price": { "currency": "INR", "value": "10.492852401453995" }, "type": "item", "title": "Tax" }], "price": { "currency": "INR", "value": "68.7864768539762" } }, "provider": { "locations": [{ "gps": "12.973437,77.608771", "id": "./mobility/ind.blr/17@taxi.becknprotocol.io.provider_location" }], "id": "./mobility/ind.blr/7@taxi.becknprotocol.io.provider", "descriptor": { "images": ["https://taxi.becknprotocol.io/companies/view/7"], "name": "Best Taxies" }, "categories": [{ "id": "./mobility/ind.blr/1@taxi.becknprotocol.io.category", "descriptor": { "name": "Premium Taxi" } }], "items": [{ "category_id": "./mobility/ind.blr/1@taxi.becknprotocol.io.category", "price": { "currency": "INR", "value": "68.7864768539762" }, "descriptor": { "images": ["https://taxi.becknprotocol.io/resources/images/car.png"], "code": "Premium Taxi-FuelType:Diesel,Make:Maruti,NameOfModel:Brezza,VehicleType:Premium Taxi", "name": "Premium Taxi-FuelType:Diesel,Make:Maruti,NameOfModel:Brezza,VehicleType:Premium Taxi" }, "id": "./mobility/ind.blr/17@taxi.becknprotocol.io.item", "fulfillment_id": "./mobility/ind.blr/6285@taxi.becknprotocol.io.fulfillment", "tags": { "NameOfModel": "Brezza", "VehicleType": "Premium Taxi", "Make": "Maruti", "FuelType": "Diesel" } }] }, "id": "./mobility/ind.blr/6285@taxi.becknprotocol.io.order", "state": "Awaiting Driver acceptance", "fulfillment": { "agent": { "phone": "+919082233441", "name": "Michel MJ" }, "start": { "location": { "gps": "12.973437,77.608771" } }, "end": { "location": { "gps": "12.935193,77.624481" } }, "id": "./mobility/ind.blr/6285@taxi.becknprotocol.io.fulfillment", "vehicle": { "registration": "KA 05 3456" }, "customer": { "person": { "name": "./Rajat/Mr./Rajat/ /Kumar/" }, "contact": { "phone": "+919867654322", "email": "er.rjtkumar@gmail.com" } } }, "items": [{ "category_id": "./mobility/ind.blr/1@taxi.becknprotocol.io.category", "price": { "currency": "INR", "value": "68.7864768539762" }, "descriptor": { "images": ["https://taxi.becknprotocol.io/resources/images/car.png"], "code": "Premium Taxi-FuelType:Diesel,Make:Maruti,NameOfModel:Brezza,VehicleType:Premium Taxi", "name": "Premium Taxi-FuelType:Diesel,Make:Maruti,NameOfModel:Brezza,VehicleType:Premium Taxi" }, "id": "./mobility/ind.blr/17@taxi.becknprotocol.io.item", "fulfillment_id": "./mobility/ind.blr/6285@taxi.becknprotocol.io.fulfillment", "tags": { "NameOfModel": "Brezza", "VehicleType": "Premium Taxi", "Make": "Maruti", "FuelType": "Diesel" } }], "billing": { "address": { "country": "IND", "door": "MBT", "city": "std:080", "area_code": "560078", "name": "RajatKumar", "locality": "", "building": ",A33" }, "phone": "+919867654322", "name": "./Rajat/Mr./Rajat/ /Kumar/", "email": "er.rjtkumar@gmail.com" } } } }, { "context": { "domain": "nic2004:60221", "country": "IND", "city": "std:080", "core_version": "0.9.1", "action": "track", "bap_id": "mobilityreferencebap.becknprotocol.io", "bap_uri": "https://mobilityreferencebap.becknprotocol.io", "bpp_id": "becknify.humbhionline.in.mobility.BPP/beckn_open/app1-succinct-in", "bpp_uri": "https://becknify.humbhionline.in/mobility/beckn_open/app1-succinct-in/bpp", "transaction_id": "3d3bac46-d252-4da0-9290-afdd524d0214", "message_id": "b52878f3-28ed-4c31-8ebb-8989f33c3220", "timestamp": "2023-02-22T19:07:07.887Z", "ttl": "PT1M" }, "message": { "order_id": "./mobility/ind.blr/6285@taxi.becknprotocol.io.order" } }]
    },
    EXTRACTION_NOT_FOUND: {
      "data": {
        "eventsId": {
        },
        "batchId": {
  
        }
      }
    }
  }