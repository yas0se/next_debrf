'use server';
import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation';

const prisma = new PrismaClient()

export async function createProduct(formData: FormData) {

    const name = formData.get('Name') as string;
    const description = formData.get('Description') as string;
    const price = formData.get('Price') as string;

    const Padded = await prisma.product.create({
        data: {
            name: name,
            description: description,
            price: parseInt(price)
        }
    })
    if (Padded) {
        redirect('/product')
    }
}

export async function getProduct() {

    const Products = await prisma.product.findMany()
    return Products
}

export async function deleteProduct(id: number) {

    const Products = await prisma.product.delete({
        where: {
            id: id,
        },
    })
    redirect('/product')
}