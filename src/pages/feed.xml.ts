import { buildNewsRss } from '../lib/rss';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => buildNewsRss('en');
