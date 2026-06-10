<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Services from '$lib/components/Services.svelte';
  import WhyDevSafe from '$lib/components/WhyDevSafe.svelte';
  import OurWork from '$lib/components/OurWork.svelte';
  import Team from '$lib/components/Team.svelte';
  import CTABanner from '$lib/components/CTABanner.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>DevSafe — Build. Secure. Protect.</title>
  <meta name="description" content="Professional software development and cybersecurity services for local institutions in Cameroon." />
</svelte:head>

<Navbar />
<main>
  <Hero />
  <Services />
  <WhyDevSafe />
  <OurWork />
  <Team />
  <CTABanner />
</main>
<Footer />
