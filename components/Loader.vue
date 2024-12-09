<template>
  <div>
    <div
      class="fixed top-0 left-0 h-full bg-white w-full z-[9999999999999] flex flex-col items-center justify-between py-20"
    >
      <div class="animate-pulse">
        <img
          src="/weemax-logo.jpg"
          class="w-[120px] border rounded-full overflow-hidden border-black/70"
          alt=""
        />
        <h1 class="mt-4 text-2xl font-black text-center">Weemax</h1>
      </div>
      <div class="flex flex-col items-center gap-3">
        <svg viewBox="0 0 100 100" class="h-12">
          <g
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="6"
          >
            <!-- left line -->
            <path d="M 21 40 V 59">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                values="0 21 59; 180 21 59"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <!-- right line -->
            <path d="M 79 40 V 59">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                values="0 79 59; -180 79 59"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <!-- top line -->
            <path d="M 50 21 V 40">
              <animate
                attributeName="d"
                values="M 50 21 V 40; M 50 59 V 40"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <!-- btm line -->
            <path d="M 50 60 V 79">
              <animate
                attributeName="d"
                values="M 50 60 V 79; M 50 98 V 79"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <!-- top box -->
            <path d="M 50 21 L 79 40 L 50 60 L 21 40 Z">
              <animate
                attributeName="stroke"
                values="rgba(100,100,100,1); rgba(255,255,255,0)"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <!-- mid box -->
            <path d="M 50 40 L 79 59 L 50 79 L 21 59 Z" />
            <!-- btm box -->
            <path d="M 50 59 L 79 78 L 50 98 L 21 78 Z">
              <animate
                attributeName="stroke"
                values="rgba(255,255,255,0); rgba(100,100,100,1)"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0 0; 0 -19"
              dur="2s"
              repeatCount="indefinite"
            />
          </g>
        </svg>
        <h1 class="text-xl font-bold">Loading...</h1>
      </div>
    </div>
  </div>
</template>
