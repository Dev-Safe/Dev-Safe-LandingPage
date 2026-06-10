<script lang="ts">
  import { intersect } from '$lib/actions/intersect';
  import { fly, fade } from 'svelte/transition';
  import { Terminal, Shield } from '@lucide/svelte';
  import { ourWork } from '$lib/data/content';

  let visible = $state(false);
</script>

<section 
  id="work" 
  class="relative py-24 bg-ds-surface grid-bg overflow-hidden border-b border-ds-border/40"
  use:intersect={{ threshold: 0.1, onIntersect: () => { visible = true; } }}
>
  <div class="max-w-7xl mx-auto px-6 w-full relative z-10">
    
    <!-- Centered Header -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      {#if visible}
        <h2 
          class="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          transition:fly={{ y: 20, duration: 600 }}
        >
          {ourWork.heading}
        </h2>
        <p 
          class="font-body text-slate-400 text-sm sm:text-base leading-relaxed"
          transition:fly={{ y: 20, duration: 600, delay: 150 }}
        >
          {ourWork.subtitle}
        </p>
      {/if}
    </div>

    <!-- Featured Project Card -->
    {#if visible}
      <div 
        class="bg-ds-bg/60 border border-ds-border/70 border-l-[4px] border-l-ds-cyan rounded-2xl p-8 md:p-10 relative overflow-hidden mb-12"
        transition:fly={{ y: 30, duration: 700, delay: 300 }}
      >
        <!-- Decorative Glow in Background -->
        <div class="absolute -right-16 -top-16 w-56 h-56 bg-ds-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Left Side: Project Metadata -->
          <div class="lg:col-span-7 space-y-6">
            <div>
              <!-- Live Project Badge -->
              <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-ds-success/15 border border-ds-success/30 text-[10px] font-mono font-bold text-ds-cyan uppercase tracking-wider mb-3">
                <span class="w-1.5 h-1.5 rounded-full bg-ds-cyan animate-pulse"></span>
                {ourWork.project.statusBadge}
              </span>
              <!-- Project Title -->
              <h3 class="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {ourWork.project.title}
              </h3>
            </div>

            <!-- Description -->
            <p class="font-body text-slate-400 text-sm sm:text-base leading-relaxed">
              {ourWork.project.description}
            </p>

            <!-- Tech Tags -->
            <div class="flex flex-wrap gap-2 pt-2">
              {#each ourWork.project.tags as tag}
                <span class="px-3 py-1 bg-ds-elevated/70 border border-ds-border/50 rounded-md text-xs font-mono font-medium text-slate-300">
                  {tag}
                </span>
              {/each}
            </div>

            <!-- Progress Bar -->
            <div class="space-y-2.5 pt-4 border-t border-ds-border/30 max-w-[500px]">
              <div class="flex justify-between items-center text-xs font-mono">
                <span class="text-slate-400">{ourWork.project.progressLabel}</span>
                <span class="text-ds-cyan font-bold">{ourWork.project.progressPercent}%</span>
              </div>
              <div class="w-full h-2.5 bg-ds-elevated rounded-full overflow-hidden border border-ds-border/30">
                <div class="h-full bg-gradient-to-r from-ds-cyan to-ds-blue rounded-full transition-all duration-1000" style="width: {ourWork.project.progressPercent}%;"></div>
              </div>
            </div>
          </div>

          <!-- Right Side: Decorative Code Block -->
          <div class="lg:col-span-5 w-full">
            <div class="relative bg-ds-elevated/40 border border-ds-border/60 rounded-xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <!-- Window control dots -->
              <div class="flex items-center gap-1.5 mb-4 border-b border-ds-border/30 pb-3">
                <div class="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <span class="text-[10px] font-mono text-slate-500 ml-auto flex items-center gap-1">
                  <Terminal class="w-3.5 h-3.5" /> main.rs
                </span>
              </div>

              <!-- Styled Code Snippet -->
              <div class="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto whitespace-pre">
                <span class="text-ds-cyan">const</span> eventra = <span class="text-ds-cyan">await</span> DevSafe
  .<span class="text-emerald-400">build</span>(&#123;
    stack: [<span class="text-amber-400">'SvelteKit'</span>, <span class="text-amber-400">'Rust'</span>],
    secured: <span class="text-ds-cyan">true</span>,
    status: <span class="text-emerald-400">'live'</span>
  &#125;);
              </div>
            </div>
          </div>

        </div>
      </div>
    {/if}

    <!-- Call to Action below card -->
    {#if visible}
      <div 
        class="text-center"
        transition:fly={{ y: 15, duration: 500, delay: 500 }}
      >
        <span class="text-sm text-slate-400 font-body">
          {ourWork.ctaText}
          <a href={ourWork.ctaLink.href} class="text-ds-cyan font-semibold hover:underline">
            {ourWork.ctaLink.text}
          </a>
        </span>
      </div>
    {/if}

  </div>
</section>
