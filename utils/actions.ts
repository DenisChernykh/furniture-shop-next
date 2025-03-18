import { Prisma } from '@prisma/client'
import db from '../utils/db'
class DatabaseError extends Error {
	constructor(message: string) {
		super(message)
		this.name = "DatabaseError"
		Object.setPrototypeOf(this, DatabaseError.prototype)
	}
}
class DataNotFoundError extends Error {
	constructor(message: string) {
		super(message)
		this.name = "DataNotFoundErro"
		Object.setPrototypeOf(this, DataNotFoundError.prototype)
	}
}
export const fetchAboutData = async (): Promise<Prisma.SectionAboutGetPayload<object>[]> => {
	try {
		const data = await db.sectionAbout.findMany()
		if (!data || !data.length) {
			throw new DataNotFoundError('Данные для секции "О нас" не найдены ')
		}
		return data
	} catch (error) {
		console.error('Ошибка при запросе данных секции "О нас":', error);
		if (error instanceof DataNotFoundError) throw error
		throw new DatabaseError('Произошла ошибка при запросе данных базы данных')
	}

}

export const fetchStatisticsData = async (): Promise<Prisma.SectionStatisticsGetPayload<object>[]> => {

	try {
		const data = await db.sectionStatistics.findMany()
		if (!data || !data.length) {
			throw new DataNotFoundError('Данные для секции статистики не найдены')
		}
		return data
	} catch (error) {
		console.error('Ошибка при запросе данных секции статистикиa:', error);
		if (error instanceof DataNotFoundError) throw error
		throw new DatabaseError('Произошла ошибка при запросе данных c базы данных')
	}


}
type TeamMemberPhoto = Prisma.TeamMemberGetPayload<{ select: { id: true; imageUrl: true; firstName: true; lastName: true; } }>
export const fetchTeamData = async (): Promise<TeamMemberPhoto[]> => {
	try {
		const data = await db.teamMember.findMany({
			select: {
				id: true,
				imageUrl: true,
				firstName: true, lastName: true
			}
		})
		if (!data || data.length === 0) {
			throw new DataNotFoundError('Данные для команды не найдены')
		}
		return data
	} catch (error) {
		console.error('Ошибка при запросе данных данных команды:', error);
		if (error instanceof DataNotFoundError) throw error
		throw new DatabaseError('Произошла ошибка при запросе данных c базы данных')
	}
}

export const fetchAdvantagesData = async () => {
	try {
		const data = await db.sectionAdvantages.findFirst({
			select: {
				title: true,
				advantages: {
					select: {
						id: true,
						iconUrl: true,
						item: true
					}
				}
			}
		})
		if (!data) {
			throw new DataNotFoundError('Данные для преимуществ не найдены')

		}
		return data
	}
	catch (error) {
		console.error('Ошибка при запросе данных секции преимуществ:', error);
		if (error instanceof DataNotFoundError) throw error
		throw new DatabaseError('Произошла ошибка при запросе данных c базы данных')
	}
}

export const fetchMateriasData = async () => {
	try { const data = await db.sect} catch (error) {

	}
}