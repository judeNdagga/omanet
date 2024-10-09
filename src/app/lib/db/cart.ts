// import { Cart, CartItem, Prisma } from "@prisma/client";
// import  prisma from "../prisma";
// import { cookies } from "next/dist/client/components/headers";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { auth, signIn } from "@/app/lib/auth";
// import { User } from "next-auth";
// export type CartWithProducts = Prisma.CartGetPayload<{
//   include: { items: { include: { product: true } } };
// }>;

// export type CartItemWithProduct = Prisma.CartItemGetPayload<{
//   include: { product: true };
// }>;

// export type ShoppingCart = CartWithProducts & {
//   size: number;
//   subtotal: number;
// };

// export async function getCart(): Promise<ShoppingCart | null> {
//   const session = await auth();
//   const user = session?.user;
//   const userid = session?.user?.id;

//   let cart: CartWithProducts | null = null;

//   // needs encryption  + secure settings
//   if (session) {
//     cart = await prisma.cart.findFirst({
//       where: { id: userid },
//       include: { items: { include: { product: true } } },
//     });
//   } else {
//     const localCartId = cookies().get("localCartId")?.value;
//     cart = localCartId
//       ? await prisma.cart.findUnique({
//           where: { id: localCartId },
//           include: { items: { include: { product: true } } },
//         })
//       : null;
//   }

//   if (!cart) {
//     return null;
//   }

//   return {
//     ...cart,
//     size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
//     subtotal: cart.items.reduce(
//       (acc, item) => acc + item.quantity * item.product.price,
//       0
//     ),
//   };
// }
// export async function createCart(): Promise<ShoppingCart> {
//   const session = await auth();
//   const user = session?.user;
//   const userid = session?.user?.id;

//   let newCart: Cart;

//   if (session) {
//     newCart = await prisma.cart.create({
//       data: { id: userid },
//     });
//   } else {
//     newCart = await prisma.cart.create({
//       data: {},
//     });
//     cookies().set("localCartId", newCart.id);
//   }

//   return {
//     ...newCart,
//     items: [],
//     size: 0,
//     subtotal: 0,
//   };
// }

// export async function mergeAnonymousCartIntoUserCart(userId: string) {
//   const localCartId = cookies().get("localCartId")?.value;

//   const cart = localCartId
//     ? await prisma.cart.findUnique({
//         where: { id: localCartId },
//         include: { items: { include: { product: true } } },
//       })
//     : null;
//   const localCart = localCartId
//     ? await prisma.cart.findUnique({
//         where: { id: localCartId },
//         include: { items: true },
//       })
//     : null;

//   if (!localCart) return;

//   const userCart = await prisma.cart.findFirst({
//     where: { userId },
//     include: { items: true },
//   });

//   await prisma.$transaction(async (tx) => {
//     if (userCart) {
//       const mergedCartItems = mergeCartitems(localCart.items, userCart.items);
//       await tx.cartItem.deleteMany({
//         where: { cartId: userCart.id },
//       });

//       await tx.cart.update({
//         where: { id: userCart.id },
//         data: {
//           items: {
//             createMany: {
//               data: mergedCartItems.map((item) => ({
//                 productId: item.productId,
//                 quantity: item.quantity,
//               })),
//             },
//           },
//         },
//       });
//     } else {
//       await tx.cart.create({
//         data: {
//           userId,
//           items: {
//             createMany: {
//               data: localCart.items.map((item) => ({
//                 productId: item.productId,
//                 quantity: item.quantity,
//               })),
//             },
//           },
//         },
//       });
//     }

//     await tx.cart.delete({
//       where: { id: localCart.id },
//     });
//     cookies().set("localCart", "");
//   });
// }

// function mergeCartitems(...cartItems: CartItem[][]) {
//   return cartItems.reduce((acc, items) => {
//     items.forEach((item) => {
//       const existingItem = acc.find((i) => i.productId === item.productId);
//       if (existingItem) {
//         existingItem.quantity += item.quantity;
//       } else {
//         acc.push(item);
//       }
//     });
//     return acc;
//   }, [] as CartItem[]);
// }
