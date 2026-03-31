import Image from "next/image";

export const metadata = {
  title: "PC y Electricidad a Domicilio Zona Sur",
  description:
    "Reparación de PC, celulares y electricidad domiciliaria en Zona Sur. Servicio rápido en el día.",
};

const WHATSAPP =
  "https://wa.me/5491173625098?text=Hola%20te%20consulto%20por%20servicio";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center">

      {/* HEADER */}
      <header className="w-full max-w-5xl flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <span className="font-semibold text-lg">
            PC y Electricidad Zona Sur
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold max-w-xl mx-auto">
          Soluciono tu PC, celular o problemas eléctricos en el día
        </h1>
        <p className="mt-4 text-lg">
          Servicio a domicilio en Zona Sur. Rápido, claro y sin vueltas.
        </p>

        <a
          href={WHATSAPP}
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl font-semibold"
        >
          Escribime por WhatsApp
        </a>
      </section>

      {/* PROBLEMAS */}
      <section className="mt-16 max-w-xl px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          ¿Qué soluciono?
        </h2>

        <div className="grid gap-4">
          <div className="bg-white p-4 rounded-xl shadow">
            💻 PC lenta o que no arranca
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            🦠 Virus y errores de sistema
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            📱 Celular con pantalla rota o batería dañada
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            ⚡ Problemas eléctricos en el hogar
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mt-16 max-w-xl px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Servicios
        </h2>

        <ul className="space-y-3">
          <li>✔ Formateo e instalación de PC</li>
          <li>✔ Optimización y limpieza</li>
          <li>✔ Instalación de programas</li>
          <li>✔ Electricidad domiciliaria básica</li>
          <li>✔ Instalación de luminarias</li>
          <li className="mt-4 font-semibold">📱 Celulares:</li>
          <li>✔ Cambio de módulo (pantalla)</li>
          <li>✔ Cambio de batería</li>
          <li>✔ Reparación de pin de carga</li>
          <li>✔ Limpieza interna</li>
        </ul>
      </section>

      {/* ZONA */}
      <section className="mt-16 text-center px-6">
        <h2 className="text-xl font-semibold mb-2">
          Atención en Zona Sur
        </h2>
        <p>
          Lomas · Banfield · Lanús · Quilmes
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="mt-16 mb-16 text-center px-6">
        <h2 className="text-xl font-semibold">
          Consultá ahora y coordinamos en el día
        </h2>

        <a
          href={WHATSAPP}
          className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-xl text-lg"
        >
          Enviar WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-gray-900 text-white py-6 mt-auto">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <p className="font-semibold">
            PC y Electricidad a Domicilio Zona Sur
          </p>

          <div className="flex justify-center gap-6 text-sm">
            <a href="https://instagram.com/TU_USUARIO" target="_blank">
              Instagram
            </a>
            <a href="https://www.google.com/maps" target="_blank">
              Google
            </a>
            <a href="https://facebook.com/TU_PAGINA" target="_blank">
              Facebook
            </a>
            <a href={WHATSAPP} target="_blank">
              WhatsApp
            </a>
          </div>

          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} - Servicio técnico a domicilio
          </p>
        </div>
      </footer>

    </main>
  );
}