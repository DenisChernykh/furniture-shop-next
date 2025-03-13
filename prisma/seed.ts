import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
});
const url = `${process.env.SUPABASE_URL}/storage/v1/object/public/bucket-furniture-db/`;

async function main() {
	console.log('Скрипт начал выполнение');

	// Проверка переменных окружения
	if (!process.env.SUPABASE_URL || !process.env.DATABASE_URL) {
		console.error('Ошибка: SUPABASE_URL или DATABASE_URL не заданы в .env файле');
		process.exit(1);
	}

	console.log('URL:', url);

	// Проверка подключения к базе данных
	try {
		await prisma.$connect();
		console.log('Подключение к базе данных успешно');
	} catch (error) {
		console.error('Ошибка подключения к базе данных:', error);
		process.exit(1);
	}

	// Проверка выполнения запроса
	try {
		const teamMembers = await prisma.teamMember.createMany({
			data: [
				{
					id: '1',
					firstName: 'Иван',
					lastName: 'Иванов',
					imageUrl: `${url}1@3x.jpg`,
					position: 'Разработчик',
				},
				{
					id: '2',
					firstName: 'Мария',
					lastName: 'Петрова',
					imageUrl: `${url}2@3x.jpg`,
					position: 'Дизайнер',
				},
				{
					id: '3',
					firstName: 'Алексей',
					lastName: 'Сидоров',
					imageUrl: `${url}3@3x.jpg`,
					position: 'Аналитик',
				},
				{
					id: '4',
					firstName: 'Елена',
					lastName: 'Козлова',
					imageUrl: `${url}4@3x.jpg`,
					position: 'Менеджер',
				},
				{
					id: '5',
					firstName: 'Дмитрий',
					lastName: 'Федоров',
					imageUrl: `${url}5@3x.jpg`,
					position: 'Тестировщик',
				},
				{
					id: '6',
					firstName: 'Владимир',
					lastName: 'Баданин',
					imageUrl: `${url}6@3x.jpg`,
					position: 'Менеджер',
				},
				{
					id: '7',
					firstName: 'Игорь',
					lastName: 'Кузнецов',
					imageUrl: `${url}7@3x.jpg`,
					position: 'Разработчик',
				},
			],
		});
		console.log('Добавлено записей:', teamMembers.count);
	} catch (error) {
		console.error('Ошибка при добавлении записей:', error);
	}

	console.log('Скрипт завершил выполнение');
}

// Запуск main
main().catch((e) => {
	console.error('Ошибка в main:', e);
	process.exit(1);
});