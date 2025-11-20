export default function ({ env }: { env: any }) {
  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      // si APP_KEYS no está definido, usa estos valores por defecto (cámbialos en producción)
      keys: env.array('APP_KEYS', ['CHANGE_ME_1', 'CHANGE_ME_2']),
    },
  };
}
