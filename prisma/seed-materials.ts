
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient({
	log: ["query", "info", "warn", "error"],
});
const url = `${process.env.SUPABASE_URL}/storage/v1/object/public/bucket-furniture-db/material-categories/`;

async function main() {
	try {
		console.log("Скрипт начал выполнение");

		// Проверка переменных окружения
		if (!process.env.SUPABASE_URL || !process.env.DATABASE_URL) {
			console.error(
				"Ошибка: SUPABASE_URL или DATABASE_URL не заданы в .env файле",
			);
			process.exit(1);
		}

		console.log("URL:", url);

		// Проверка подключения к базе данных
		try {
			await prisma.$connect();
			console.log("Подключение к базе данных успешно");
		} catch (error) {
			console.error("Ошибка подключения к базе данных:", error);
			process.exit(1);
		}

		// Проверка выполнения запроса
		try {
			const sectionMaterials = await prisma.sectionMaterials.createMany({
				data: [
					{
						title: "Фасады",
						description: "Более 10 видов покрытий, исполнение по вашему эскизу",
						features: [
							"Фрезеровка",
							"Покраска",
							"Шпон экзотических пород дерева",
							"Итальянская природная TSS-плита",
							"Испанский UF-пластик",
							"Стекло",
							"Металл"
						],
						imageUrl: `${url}1@3x.jpg`,
						order: 1
					},
					{
						title: "Корпус",
						description: "Более 10 видов материалов",
						features: [
							"МДФ",
							"ЛДСП",
							"Фанера",
							"Шпон",
							"Металл",
							"Камень",
							"Акрил"
						],
						imageUrl: `${url}2@3x.jpg`,
						order: 2
					},
					{
						title: "Фурнитура",
						description: "Премиальные бренды",
						features: [
							"Blum",
							"Kessebohmer",
							"Hettich",
							"Volpato",
							"Brass",
							"Amig",
							"GTv",
							"Hafele",
							"Makmart"
						],
						imageUrl: `${url}3@3x.jpg`,
						order: 3
					}]

			});
			console.log("Добавлено записей:", sectionMaterials.count);
		} catch (error) {
			console.error("Ошибка при добавлении записей:", error);
		}

		console.log("Скрипт завершил выполнение");
	} finally {
		await prisma.$disconnect();
	}
}

// Запуск main
main().catch((e) => {
	console.error("Ошибка в main:", e);
	process.exit(1);
});
