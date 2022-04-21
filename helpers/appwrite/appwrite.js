const { account, database } = require('./gateway');

async function save (newData) {

    let item = JSON.parse(newData);
    
    try {
        const session = await account.createAnonymousSession();

        const dataCollection = "[INSERT YOUR APPWRITE COLLECTION ID HERE]"; // Use the ID found in your collection dashboard
        
        if (item["configs"].running==true) {
            await database.createDocument(dataCollection, newData)
        }
    
    } catch(e) {
        console.log(`Problem saving data to local backup database.`);
    } 

}

module.exports={save};

