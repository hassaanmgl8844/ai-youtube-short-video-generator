import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    pictureURL: v.string(),
  },
  handler: async (ctx, args) => {
    // If User already exists
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    if (!user[0]?.email) {
      // If not, insert new user
      const result = await ctx.db.insert("users", {
        name: args.name,
        email: args.email,
        pictureURL: args?.pictureURL,
        credits: 3,
      });
      return result;
    }
    return user[0];
  },
});


// import { v } from "convex/values";
// import { mutation } from "./_generated/server";

// export const CreateNewUser = mutation({
//   args: {
//     name: v.string(),
//     email: v.string(),
//     pictureURL: v.string(),
//   },
//   handler: async (ctx, args) => {
//     // If User  already exists
//     const user = await ctx.db
//       .query("users")
//       .filter((q) => q.eq(q.field("email"), args.email))
//       .collect();

//       if(!user[0]?email){
//           // If not , Insert New User
//         const result = await ctx.db.insert('users',{
//             name:args.name,
//             email:args.email,
//             pictureURL:args?.pictureURL,
//             credits:3,
//         })
//         return result;
//       }
//       return user[0];
//   },
// });
