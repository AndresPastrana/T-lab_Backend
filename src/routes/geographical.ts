import { Router, Request, Response } from "express";
import { GeographicalController } from "../controllers";

export const router: Router = Router();

// TODO: Only an admin access this routes
router.get("/countries", [], GeographicalController.getCountries);

router.post("/countries", [], (_req: Request, resp: Response) => {
  resp.json({ ok: true });
});

router.put("/countries", [], (_req: Request, resp: Response) => {
  resp.json({ ok: true });
});

router.delete("/countries", []),
  (_req: Request, resp: Response) => {
    resp.json({ ok: true });
  };

// States
router.get("/states", [], (_req: Request, resp: Response) => {
  resp.json({ ok: true });
});

router.post("/states", [], (_req: Request, resp: Response) => {
  resp.json({ ok: true });
});

router.put("/states", [], (_req: Request, resp: Response) => {
  resp.json({ ok: true });
});

router.delete("/states", [], (_req: Request, resp: Response) => {
  resp.json({ ok: true });
});

router.get("/cities", [], (_req: Request, resp: Response) => {
  resp.json({ ok: true });
});

router.post("/cities", [], (_req: Request, resp: Response) => {
  resp.json({ ok: true });
});

router.put("/cities", [], (_req: Request, resp: Response) => {
  resp.json({ ok: true });
});

router.delete("/cities", [], (_req: Request, resp: Response) => {
  resp.json({ ok: true });
});
