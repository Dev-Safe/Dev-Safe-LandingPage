<script lang="ts">
  import { intersect } from '$lib/actions/intersect';
  import { fly } from 'svelte/transition';
  import { team } from '$lib/data/content';

  let visible = $state(false);
</script>

<section 
  id="team" 
  class="relative py-24 bg-ds-bg overflow-hidden"
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
          {team.heading}
        </h2>
        <p 
          class="font-body text-slate-400 text-sm sm:text-base leading-relaxed"
          transition:fly={{ y: 20, duration: 600, delay: 150 }}
        >
          {team.subtitle}
        </p>
      {/if}
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
      {#if visible}
        {#each team.members as member, index}
          <div 
            class="glass-card p-6 flex flex-col items-center text-center border border-ds-border/70 hover:border-ds-cyan/40 transition-all duration-300 relative group"
            transition:fly={{ y: 30, duration: 600, delay: index * 100 + 200 }}
          >
            <!-- Top hover line glow -->
            <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-ds-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <!-- Avatar -->
            <div 
              class="w-[60px] h-[60px] rounded-full overflow-hidden flex items-center justify-center font-heading text-lg font-bold text-white mb-4 shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
              style="background-color: {member.bg}; border: {member.borderCyan ? '2px solid #00D4FF' : 'none'};"
            >
              {#if member.image}
                <img src={member.image} alt={member.name} class="w-full h-full object-cover" />
              {:else}
                {member.initials}
              {/if}
            </div>

            <!-- Name -->
            <h3 class="font-heading text-base font-bold text-white mb-1 group-hover:text-ds-cyan transition-colors duration-200">
              {member.name}
            </h3>

            <!-- Role -->
            <p class="font-body text-xs font-semibold text-ds-cyan mb-4">
              {member.role}
            </p>

            <!-- Tags Row -->
            <div class="flex flex-wrap gap-1.5 justify-center mt-auto pt-3 border-t border-ds-border/30 w-full">
              {#each member.tags as tag}
                <span class="px-2 py-0.5 bg-ds-elevated/70 border border-ds-border/40 rounded text-[9px] font-mono font-medium text-slate-400">
                  {tag}
                </span>
              {/each}
            </div>

          </div>
        {/each}
      {/if}
    </div>

  </div>
</section>
