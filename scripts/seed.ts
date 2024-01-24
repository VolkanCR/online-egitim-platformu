const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Bilgisayar bilimleri" },
        { name: "Müzik" },
        { name: "Spor" },
        { name: "Fotoğrafçılık" },
        { name: "Muhasebe" },
        { name: "Mühendislik" },
        { name: "Film" },
      ]
    });

    console.log("Başarılı");
  } catch (error) {
    console.log("Veritabanı kategorileri eklenirken hata oluştu", error);
  } finally {
    await database.$disconnect();
  }
}

main();