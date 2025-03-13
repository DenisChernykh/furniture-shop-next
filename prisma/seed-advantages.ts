import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient({
	log: ["query", "info", "warn", "error"],
});
const url = "/icons/";

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
			const sectionAdvantages = await prisma.sectionAdvantages.create({
				data: {
					title: "Наши преимущества",
					advantages: {
						create: [
							{
								iconUrl: `${url}check.svg`,
								item: "Собственное производство",
							},
							{
								iconUrl: `${url}shield.svg`,
								item: "Гарантия 6 лет",
							},
							{
								iconUrl: `${url}divider.svg`,
								item: "бесплатный замер",
							},
							{
								iconUrl: `${url}clock.svg`,
								item: "выезд в течение 24 часов",
							},
							{
								iconUrl: `${url}box.svg`,
								item: "Провессиональная бесплатная консультация",
							},
						],
					},
				},
			});
			console.log("Добавлена запись с id:", sectionAdvantages.id);
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
