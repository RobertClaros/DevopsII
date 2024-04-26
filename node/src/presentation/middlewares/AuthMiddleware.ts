import { Request, Response, NextFunction } from "express";

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        message: "Denied, requires authentication.",
      });
    }
    const response = await fetch(`api/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
      }),
    });

    if (!response.ok) {
      throw new Error("Error verifying token");
    }
    const data = await response.json();
    req.body = { userId: data.idUser };
    next();
  } catch (error) {
    console.error("Error getting userId:", error);
    return null;
  }
}

export default authMiddleware;
