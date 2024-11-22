import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request, { params }) {
  try {
    const filePath = path.join(process.cwd(), 'app/public/data', params.filename);
    const fileContent = await fs.readFile(filePath, 'utf8');
    return new Response(JSON.stringify({ content: fileContent }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'File not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}