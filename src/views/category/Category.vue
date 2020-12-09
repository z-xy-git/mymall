<template>
  <div class="wrapper">
    <ul class="content">
      <li>lii1</li>
      <li>lii2</li>
      <li>lii3</li>
      <li>lii4</li>
      <li>lii5</li>
      <li>lii6</li>
      <li>lii7</li>
      <li>lii8</li>
      <li>lii9</li>
      <li>lii10</li>
      <li>lii11</li>
      <li>lii12</li>
      <li>lii13</li>
      <li>lii14</li>
      <li>lii15</li>
      <li>lii16</li>
      <li>lii17</li>
      <li>lii18</li>
      <li>lii19</li>
      <li>lii20</li>
      <li>lii21</li>
      <li>lii22</li>
      <li>lii23</li>
      <li>lii24</li>
      <li>lii25</li>
      <li>lii26</li>
      <li>lii27</li>
      <li>lii28</li>
      <li>lii29</li>
      <li>lii30</li>
      <li>lii31</li>
      <li>lii32</li>
      <li>lii33</li>
      <li>lii34</li>
      <li>lii35</li>
      <li>lii36</li>
      <li>lii37</li>
      <li>lii38</li>
      <li>lii39</li>
      <li>lii40</li>
      <li>lii41</li>
      <li>lii42</li>
      <li>lii43</li>
      <li>lii44</li>
      <li>lii45</li>
      <li>lii46</li>
      <li>lii47</li>
      <li>lii48</li>
      <li>lii49</li>
      <li>lii50</li>
      <li>lii51</li>
      <li>lii52</li>
      <li>lii53</li>
      <li>lii54</li>
      <li>lii55</li>
      <li>lii56</li>
      <li>lii57</li>
      <li>lii58</li>
      <li>lii59</li>
      <li>lii60</li>
      <li>lii61</li>
      <li>lii62</li>
      <li>lii63</li>
      <li>lii64</li>
      <li>lii65</li>
      <li>lii66</li>
      <li>lii67</li>
      <li>lii68</li>
      <li>lii69</li>
      <li>lii70</li>
      <li>lii71</li>
      <li>lii72</li>
      <li>lii73</li>
      <li>lii74</li>
      <li>lii75</li>
      <li>lii76</li>
      <li>lii77</li>
      <li>lii78</li>
      <li>lii79</li>
      <li>lii80</li>
      <li>lii81</li>
      <li>lii82</li>
      <li>lii83</li>
      <li>lii84</li>
      <li>lii85</li>
      <li>lii86</li>
      <li>lii87</li>
      <li>lii88</li>
      <li>lii89</li>
      <li>lii90</li>
      <li>lii91</li>
      <li>lii92</li>
      <li>lii93</li>
      <li>lii94</li>
      <li>lii95</li>
      <li>lii96</li>
      <li>lii97</li>
      <li>lii98</li>
      <li>lii99</li>
      <li>lii100</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Category",
    data(){
      return{
        scroll: null
      }
    },
    mounted(){
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
      probeType: 3
       })
      this.scroll.on('scroll',(position) => {
        // console.log(position);
      })
    }
  }
</script>

<style scoped>
  .wrapper{
    height: 200px;
    background-color: lightblue;
    overflow: hidden;
  }
</style>