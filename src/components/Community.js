import React from "react";

export const Community = () => {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-2xl font-semibold tracking-wide md:text-3xl">
        🐰 Join Our Community Forum
      </h2>
      <p className="text-l mb-8">
        Are you curious, 🤔 or do you have questions burning in your mind? 🔥
        Look no further! Join our lively Community Forum where you can:
      </p>
      <ul className="grid gap-6  sm:grid-cols-2 xl:gap-8">
        {/*<li>*/}
        {/*  <a*/}
        {/*    href="https://community.keploy.io/"*/}
        {/*    className="flex items-start space-x-4"*/}
        {/*  >*/}
        {/*   <svg*/}
        {/*     className="h-12 w-12 flex-none "*/}
        {/*     width="48"*/}
        {/*     height="48"*/}
        {/*     viewBox="0 0 48 48"*/}
        {/*     fill="none"*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*   >*/}
        {/*   <defs>*/}
        {/*      <linearGradient transform="matrix(1 0 0 1 0 0)"  id="1" x1="90.930305" y1="25.938534" x2="9.157364" y2="67.24797">*/}
        {/*         <stop stop-color="#4285F4" offset="0%"/>*/}
        {/*         <stop stop-color="#3F51B5" offset="100%"/>*/}
        {/*       </linearGradient>*/}
        {/*     </defs>*/}
        {/*    <path transform="matrix(1 8.742278E-08 8.742278E-08 -1 -3.8146973E-06 47.999996)"  d="M24.672024 0L27.35078 1.4767092C 28.509848 2.1165648 31.162785 3.5790048 33.79441 5.0292935L33.79441 5.0292935L34.400642 5.36338C 37.52375 7.084452 40.450874 8.696968 40.613804 8.786067L40.613804 8.786067L40.770718 8.870854L41.028507 8.729542C 41.59639 8.415123 42.265144 8.220819 42.960052 8.164294C 45.22784 7.977056 47.293884 9.365445 47.880447 11.470993C 47.992527 11.863133 48 11.923191 48 12.54143C 48 13.240924 47.94396 13.562408 47.738476 14.088796C 47.30509 15.169831 46.389755 16.113089 45.34366 16.554688L45.34366 16.554688L45.14565 16.639475L45.14508 27.760395C 45.145023 27.863588 45.144966 27.96523 45.1449 28.065342L45.1449 28.065342L45.144215 28.925554C 45.144123 29.016663 45.144028 29.1063 45.143932 29.194487L45.143932 29.194487L45.143284 29.70637C 45.14317 29.788836 45.143047 29.869894 45.14292 29.94956L45.14292 29.94956L45.142105 30.411053C 45.136578 33.23026 45.124046 34.101063 45.100815 34.130356C 45.07466 34.16215 41.37596 36.186443 36.881477 38.63467L36.881477 38.63467L28.706972 43.082462L28.706972 43.545258C 28.706972 44.311874 28.550056 44.933647 28.195131 45.583683C 27.302212 47.215836 25.39682 48.18029 23.483955 47.971855C 21.89613 47.798748 20.51005 46.88022 19.792727 45.530693C 19.47516 44.93718 19.336927 44.40726 19.299566 43.665375L19.299566 43.665375L19.273413 43.188446L13.150007 39.811092L7.0266 36.43374L6.7052984 36.567986C 4.1797204 37.620758 1.2020782 36.39841 0.26059037 33.92192C -0.08686346 32.99986 -0.08686346 31.826971 0.26059037 30.904911C 0.6678212 29.838005 1.4636025 28.954807 2.498492 28.421354L2.498492 28.421354L2.8160572 28.255312L2.8169332 16.507536C 2.8169959 16.415344 2.8170626 16.324633 2.8171332 16.23538L2.8171332 16.23538L2.8178794 15.470948C 2.817975 15.390265 2.818075 15.31098 2.8181794 15.233071L2.8181794 15.233071L2.8188608 14.78198C 2.8235319 12.027627 2.8350773 11.202179 2.8608902 11.177771C 2.8870425 11.153041 7.4823995 8.644755 13.071549 5.5994835C 18.6607 2.5542123 23.248585 0.049459163 23.267265 0.031795174C 23.28719 0.016093854 23.543272 0.003183879 23.864952 0.0005088391L23.864952 0.0005088391L24.672024 0zM23.823864 42.480778C 23.408695 42.513493 23.20111 42.606186 22.912798 42.884262C 22.272743 43.511303 22.46303 44.55819 23.29337 44.95077C 23.673943 45.12525 24.164074 45.136158 24.521582 44.97258C 25.011711 44.749027 25.30579 44.296467 25.30579 43.767574C 25.30579 42.998768 24.642672 42.4208 23.823864 42.480778zM13.21352 29.788465C 13.164951 29.774416 9.38032 31.593805 9.27571 31.678593C 9.219668 31.720987 9.215933 31.795176 9.230877 32.22971C 9.253293 32.791424 9.197252 33.197697 9.032866 33.678158C 8.980561 33.830067 8.950672 33.981976 8.961881 34.017303C 8.973088 34.0491 11.5472355 35.469284 14.947053 37.313404C 18.231052 39.097466 20.92849 40.55298 20.939697 40.55651C 20.950907 40.55651 21.100348 40.45406 21.26847 40.32688C 21.612188 40.07252 21.89613 39.90648 22.206223 39.78283C 22.318304 39.736904 22.422915 39.680378 22.437859 39.659184C 22.451143 39.64034 22.464426 38.800842 22.467215 37.72129L22.467215 37.72129L22.467007 36.308968C 22.464314 35.10466 22.45225 34.96148 22.400497 34.872242C 22.344458 34.76626 21.918547 34.522495 18.843767 32.84795C 16.92343 31.798708 14.879804 30.685877 14.30445 30.371458C 13.861871 30.129597 13.470137 29.919092 13.301002 29.831564L13.301002 29.831564L13.227607 29.794537zM37.113113 30.86605C 37.01224 30.83072 36.989822 30.837788 36.788074 31.007362C 35.9512 31.692724 35.02092 32.024807 33.91878 32.024807C 33.190247 32.024807 32.633575 31.904692 32.013386 31.615004C 31.882626 31.554945 31.751863 31.512552 31.721975 31.52315C 31.58374 31.572609 25.434181 34.914635 25.4155 34.949963C 25.414213 34.952156 25.413368 34.97604 25.41292 35.018635L25.41292 35.018635L25.41271 35.19956C 25.416367 36.16239 25.47412 39.58219 25.490223 39.63092C 25.493958 39.637985 25.602304 39.687443 25.736803 39.74397C 26.102936 39.899414 26.465334 40.10785 26.745539 40.32688C 26.883774 40.432865 27.014536 40.521183 27.02948 40.521183C 27.04816 40.521183 30.119204 38.864304 33.855267 36.84001C 37.587593 34.815716 40.696 33.151768 40.755775 33.144703C 41.006092 33.109375 41.039715 32.936268 40.823025 32.80909C 40.531612 32.639515 37.22146 30.904911 37.113113 30.86605zM3.3790524 32.367577C 3.3590899 32.908188 3.684288 33.34385 4.2572393 33.539818C 4.4382367 33.600956 4.5525355 33.623257 4.665068 33.630554C 4.779577 33.63798 4.892282 33.629498 5.074585 33.58704C 6.0383554 33.365936 6.4229727 32.34668 5.7999463 31.658373C 4.9970903 30.756723 3.4214108 31.22067 3.3790524 32.367577zM22.295889 25.118189C 22.265146 25.118189 21.042963 25.728748 19.7158 26.399742L19.7158 26.399742L19.215315 26.653122C 17.795357 27.372972 16.410202 28.083416 16.36302 28.1246C 16.194899 28.272976 16.179955 28.262379 19.280886 29.965187C 20.902336 30.85192 22.254791 31.579676 22.288416 31.579676C 22.32204 31.583208 22.378082 31.54788 22.40797 31.505486C 22.45184 31.446226 22.46417 31.185675 22.467007 29.494112L22.467007 29.494112L22.467007 27.207285C 22.46417 25.515722 22.45184 25.25517 22.40797 25.19591C 22.378082 25.153517 22.325777 25.118189 22.295889 25.118189zM25.774162 25.61278C 25.764482 25.61278 25.75759 26.55084 25.75589 27.796597L25.75589 27.796597L25.755997 29.305775C 25.758326 30.945753 25.769653 31.195696 25.811523 31.18047L25.811523 31.18047L25.824928 31.174303L25.898182 31.137426C 26.13771 31.015112 26.840479 30.647848 27.649666 30.22308C 28.632252 29.70376 29.43924 29.27629 29.442976 29.272758C 29.450449 29.265692 29.42056 29.142044 29.379463 28.993668C 29.342102 28.84529 29.289799 28.534403 29.271118 28.304771C 29.233757 27.930296 29.237494 27.750122 29.286062 27.386244L29.286062 27.386244L29.301006 27.269663L27.545057 26.442987C 26.581152 25.987257 25.785372 25.61278 25.774162 25.61278zM40.808136 15.879813L40.770718 15.879924C 40.67358 15.911719 36.085697 18.239832 36.01471 18.296356C 35.97494 18.326443 35.961514 18.486414 35.959736 19.538946L35.959736 19.538946L35.95984 20.206158C 35.96029 20.524864 35.9612 20.896837 35.962406 21.33103L35.962406 21.33103L35.973614 24.319777L36.294914 24.535276C 36.93378 24.95568 37.2775 25.29836 37.63616 25.860077C 38.02471 26.467716 38.200306 27.061228 38.215252 27.799582C 38.22646 28.16346 38.241405 28.318903 38.278767 28.350698C 38.286938 28.358427 38.367714 28.404104 38.502857 28.477814L38.502857 28.477814L38.68995 28.579084C 39.006233 28.74927 39.475006 28.997421 39.98988 29.265692C 40.905216 29.74262 41.66364 30.13476 41.674847 30.13476C 41.686054 30.13476 41.723415 30.113564 41.75704 30.092367C 41.758125 30.091597 41.759193 30.090696 41.760246 30.089632L41.760246 30.089632L41.76633 30.081032C 41.798622 30.020039 41.811764 29.709103 41.81706 27.951704L41.81706 27.951704L41.817936 27.615973C 41.81807 27.557272 41.818195 27.497175 41.818317 27.435652L41.818317 27.435652L41.818962 27.049107C 41.81906 26.981737 41.81915 26.912874 41.819237 26.842482L41.819237 26.842482L41.819866 26.166798C 41.819923 26.086937 41.819977 26.00545 41.820023 25.922302L41.820023 25.922302L41.820156 21.892971C 41.820087 21.785826 41.82001 21.68016 41.819927 21.575987L41.819927 21.575987L41.819324 20.968882C 41.819206 20.870699 41.819077 20.77402 41.818943 20.678856L41.818943 20.678856L41.818024 20.126087C 41.8134 17.720924 41.802277 16.430468 41.78319 16.409843C 41.76451 16.388647 41.607597 16.30386 41.435738 16.222605C 41.267616 16.144884 41.06213 16.028301 40.97994 15.968244C 40.890274 15.90112 40.811817 15.869326 40.770718 15.879924zM6.3391643 15.473652C 6.2943316 15.473652 6.245763 15.494849 6.2233467 15.519578C 6.197194 15.549607 6.17758 18.757387 6.1710415 21.9634L6.1710415 21.9634L6.169843 22.649218L6.1690593 23.328028C 6.168964 23.440193 6.1688867 23.551777 6.168827 23.662634L6.168827 23.662634L6.1687922 24.636822C 6.1688447 24.742016 6.168916 24.84605 6.1690073 24.948778L6.1690073 24.948778L6.169787 25.548317C 6.172668 27.196049 6.181316 28.382683 6.197194 28.396624C 6.21961 28.414288 6.3018036 28.449615 6.383997 28.474346C 6.735187 28.58033 7.388998 28.94774 7.6056895 29.159708C 7.74766 29.30102 7.856006 29.315151 8.024129 29.219767C 8.087642 29.184439 8.999241 28.703978 10.045339 28.156395L10.045339 28.156395L10.228681 28.060678C 11.195516 27.555477 11.974686 27.141027 11.999299 27.117752C 12.026771 27.091776 12.038082 26.597841 12.042146 24.953392L12.042146 24.953392L12.042987 24.536285C 12.043105 24.462969 12.043213 24.387726 12.043311 24.310509L12.043311 24.310509L12.043942 23.561144C 12.043986 23.471704 12.044022 23.380161 12.04405 23.28647L12.04405 23.28647L12.044089 22.442146C 12.044062 22.357376 12.044019 22.273216 12.043963 22.189737L12.043963 22.189737L12.043102 21.458729C 12.04001 19.647314 12.030255 18.307964 12.01798 18.296356C 11.977542 18.261444 10.730809 17.634295 9.415843 16.980036L9.415843 16.980036L8.921755 16.734524C 7.6075125 16.08232 6.367295 15.473652 6.3391643 15.473652zM33.789207 26.635254C 33.511913 26.635254 33.005547 26.84616 32.818676 27.039967C 32.644615 27.219078 32.492294 27.546186 32.450325 27.811817C 32.442875 27.858973 32.4389 27.90419 32.4389 27.946299C 32.4389 28.453615 32.891014 29.063536 33.373264 29.194641C 33.662617 29.274443 34.11473 29.263042 34.355858 29.16614C 34.86825 28.966633 35.211857 28.482117 35.211857 27.946299C 35.211857 27.210974 34.584927 26.635254 33.789207 26.635254zM15.163745 19.818993C 15.115176 19.818993 15.055399 19.847256 15.036718 19.882584C 15.014302 19.924976 14.999358 20.931824 14.995622 22.599304L14.995622 22.599304L14.995962 23.48149C 14.99603 23.54551 14.99611 23.607264 14.996204 23.666836L14.996204 23.666836L14.996958 23.998714C 15.000473 25.124334 15.012885 25.272291 15.055399 25.312492C 15.089024 25.344288 15.152536 25.365484 15.19737 25.35842C 15.268015 25.34814 16.519928 24.761509 17.794012 24.15258L17.794012 24.15258L18.270569 23.924267C 19.45324 23.356287 20.528051 22.829578 20.539938 22.800674C 20.554884 22.768879 20.543674 22.712353 20.517523 22.677025C 20.446537 22.58164 15.27209 19.818993 15.163745 19.818993zM32.7606 19.818993C 32.756184 19.818993 32.74263 19.823927 32.720608 19.833448L32.720608 19.833448L32.629826 19.875422C 32.285316 20.040537 31.309649 20.548998 30.193926 21.147324C 28.833998 21.878614 27.653402 22.507452 27.578682 22.54278C 27.414295 22.6205 27.34331 22.726484 27.391878 22.811272C 27.392977 22.813143 27.396881 22.816492 27.40346 22.821247L27.40346 22.821247L27.473957 22.866081C 27.708408 23.00736 28.415339 23.395845 29.233757 23.83225C 29.876799 24.17514 30.455708 24.478092 30.792345 24.64923L30.792345 24.64923L30.950867 24.72895C 31.039103 24.772646 31.091019 24.796703 31.098053 24.796703C 31.131678 24.800238 31.254967 24.729582 31.378258 24.64126C 31.658463 24.443424 32.23008 24.164333 32.573795 24.05835C 32.7195 24.015955 32.85774 23.962963 32.883892 23.941767C 32.91267 23.921356 32.928463 23.00497 32.930428 22.048302L32.930428 22.048302L32.930347 21.60702C 32.928215 20.731195 32.914192 19.93322 32.887627 19.886116C 32.868946 19.847256 32.812904 19.818993 32.7606 19.818993zM24.085463 22.383804L23.947227 22.46859L23.805258 22.549845L23.644608 22.475657L23.487692 22.405L23.51758 22.549845C 23.543734 22.684092 23.53626 22.70882 23.435387 22.804207C 23.297153 22.941986 23.30089 22.963182 23.450333 22.963182C 23.599773 22.963182 23.637135 22.987911 23.715591 23.132757C 23.749216 23.192814 23.786577 23.245806 23.79405 23.245806C 23.801521 23.245806 23.838882 23.192814 23.872507 23.132757C 23.950964 22.987911 23.988325 22.963182 24.141504 22.963182C 24.290945 22.963182 24.290945 22.93492 24.148975 22.804207C 24.051838 22.715887 24.04063 22.691156 24.063046 22.546312L24.063046 22.546312L24.085463 22.383804zM29.824055 15.985908C 27.754276 14.830683 27.694498 14.802421 27.668346 15.032052C 27.649666 15.194561 27.268587 15.703284 26.932343 16.021236C 26.603569 16.33212 26.125353 16.650074 25.740538 16.816114C 25.60604 16.876173 25.493958 16.943296 25.493958 16.968025L25.493958 16.968025L25.493986 18.850498C 25.494007 18.91352 25.49404 18.973833 25.49409 19.031551L25.49409 19.031551L25.494642 19.347694C 25.49717 20.208506 25.508562 20.306519 25.55747 20.338314C 25.650873 20.405437 25.703178 20.394838 25.781635 20.299454C 25.822731 20.249994 27.078049 19.610558 28.811583 18.755621C 30.556324 17.897152 31.778015 17.271847 31.789225 17.236517C 31.800432 17.204723 31.800432 17.155264 31.789225 17.127C 31.780922 17.109337 31.505098 16.943382 31.078346 16.696983L31.078346 16.696983L30.805117 16.540033C 30.515642 16.374516 30.180225 16.184921 29.824055 15.985908zM19.957113 14.97906C 19.889864 14.97906 16.456423 16.925632 16.295773 17.056345C 16.176218 17.151731 16.232258 17.346035 16.377966 17.346035C 16.407854 17.346035 17.719212 18.013733 19.292093 18.826277C 20.144072 19.268318 20.92151 19.666824 21.462313 19.939264L21.462313 19.939264L21.796917 20.10672C 22.057196 20.235863 22.213696 20.310051 22.22864 20.310051C 22.422915 20.317118 22.419178 20.345379 22.445332 18.663769C 22.450312 18.326975 22.453218 18.03807 22.454048 17.801111L22.454048 17.801111L22.454048 17.541954C 22.45272 17.230347 22.446077 17.055874 22.434122 17.035149C 22.411707 16.996288 22.31457 16.939762 22.217432 16.904434C 21.436594 16.63241 20.49137 15.841063 20.132708 15.166299C 20.061724 15.032052 20.013155 14.97906 19.957113 14.97906zM25.860092 4.253488C 25.703178 4.1581025 25.598568 4.147504 25.535055 4.21816C 25.509066 4.24888 25.4972 4.7818046 25.494547 6.1212306L25.494547 6.1212306L25.494022 6.547558L25.493958 6.779438L25.493725 7.7591267C 25.495827 8.665952 25.504232 9.312453 25.512638 9.323052C 25.520111 9.340716 25.65461 9.411372 25.807787 9.478495C 26.211283 9.658668 26.510166 9.86357 26.902454 10.220383C 27.38067 10.658449 27.799109 11.262558 27.959759 11.746551C 27.985912 11.824272 28.019537 11.912592 28.034481 11.940855C 28.049425 11.969117 29.588682 12.8487835 31.456715 13.890959L31.456715 13.890959L31.662935 14.005952C 33.438057 14.995295 34.88393 15.788201 34.91631 15.791604C 34.95367 15.791604 35.062016 15.745677 35.159153 15.689153C 35.260025 15.6326275 36.182835 15.148635 37.217724 14.608117C 38.248875 14.067598 39.111908 13.60127 39.12685 13.569474C 39.14927 13.534146 39.141796 13.438761 39.104435 13.3186455C 39.018505 13.039555 39.018505 12.053905 39.104435 11.838404C 39.138058 11.743018 39.153004 11.658231 39.134323 11.629969C 39.115643 11.598173 38.60754 11.301418 38.00603 10.969336C 37.40079 10.637253 34.453037 9.008633 31.452978 7.3517513C 28.452919 5.694869 25.934814 4.299414 25.860092 4.253488zM22.381817 4.098045C 22.292152 4.098045 7.3404293 12.198749 7.1984587 12.322397C 7.090113 12.417783 7.090113 12.453111 7.1984587 12.548496C 7.243292 12.587357 8.606955 13.3009815 10.228406 14.131189C 10.912106 14.482261 11.5007105 14.781666 11.971367 15.018039L11.971367 15.018039L12.267413 15.166158C 12.8699 15.4663105 13.215699 15.6296835 13.235936 15.622029C 13.269561 15.611431 13.355491 15.569037 13.426476 15.526644C 13.49746 15.48425 14.9209 14.721167 16.583448 13.830901C 18.249733 12.940637 19.64702 12.181085 19.688116 12.145757C 19.744158 12.099831 19.766573 12.039773 19.766573 11.947921C 19.762838 11.77128 20.013155 11.244894 20.285887 10.856286C 20.68938 10.283973 21.369345 9.725791 22.01942 9.436102C 22.153917 9.376044 22.299623 9.326585 22.344458 9.326585C 22.517834 9.326585 22.539629 9.399521 22.542208 7.7989287L22.542208 7.7989287L22.542126 6.231563C 22.53997 4.9034934 22.528507 4.20626 22.505108 4.165168C 22.48269 4.12984 22.426651 4.098045 22.381817 4.098045zM23.517988 11.96254C 23.216612 12.058994 22.887415 12.335206 22.734407 12.615803C 22.252205 13.518971 23.012602 14.593128 24.079014 14.509826C 24.232021 14.496673 24.440666 14.45283 24.551945 14.404602C 24.797684 14.303763 25.094423 14.027552 25.228884 13.777645C 25.367981 13.518971 25.400438 13.076156 25.298433 12.786791C 25.205702 12.519347 24.92287 12.203677 24.635403 12.045841C 24.357208 11.89239 23.861095 11.857316 23.517988 11.96254zM43.068478 11.226398C 42.43809 11.402387 42.065865 11.867905 42.065865 12.481026C 42.065865 13.463155 43.128517 14.08763 44.05308 13.639144C 44.485348 13.43477 44.82756 12.918159 44.82756 12.481026C 44.82756 12.208528 44.695477 11.890613 44.479343 11.657854C 44.101112 11.237752 43.590797 11.084472 43.068478 11.226398z" stroke="none" fill="url(#1)" />*/}
        {/*   </svg>*/}

        {/*/!*    <div className="flex-auto">*!/*/}
        {/*/!*      <h3 className="font-bold">Community Forum</h3>*!/*/}
        {/*/!*      <p>Search frequently asked questions and ask your own.</p>*!/*/}
        {/*/!*    </div>*!/*/}
        {/*/!*  </a>*!/*/}
        {/*/!*</li>*!/*/}
        <li>
          <a
            href="https://www.youtube.com/channel/UC6OTg7F4o0WkmNtSoob34lg"
            className="flex items-start space-x-4"
          >
            <svg
              fill="currentColor"
              className="h-12 w-12 flex-none text-red-500 "
            >
              <rect width="48" height="48" rx="12" />
              <path
                d="M36.83 18.556c0-2.285-1.681-4.124-3.758-4.124a184.713 184.713 0 00-8.615-.182h-.914c-2.925 0-5.799.05-8.612.183-2.072 0-3.753 1.848-3.753 4.133A75.6 75.6 0 0011 23.99a78.487 78.487 0 00.173 5.429c0 2.285 1.68 4.139 3.753 4.139 2.955.137 5.987.198 9.07.192 3.087.01 6.11-.054 9.069-.193 2.077 0 3.758-1.853 3.758-4.138.121-1.813.177-3.62.172-5.434a73.982 73.982 0 00-.165-5.428zM21.512 28.97v-9.979l7.363 4.987-7.363 4.992z"
                fill="currentColor"
                className="text-red-50"
              />
            </svg>
            <div className="flex-auto">
              <h3 className="font-bold">YouTube</h3>
              <p>Watch tutorials and meetups with Keploy users.</p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://lu.ma/keploy" className="flex items-start space-x-4">
            <svg
              width="512"
              height="512"
              viewBox="0 0 512 512"
              className="h-12 w-12 flex-none rounded-lg text-black"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M384 0H128C57.3076 0 0 57.3076 0 128V384C0 454.692 57.3076 512 128 512H384C454.692 512 512 454.692 512 384V128C512 57.3076 454.692 0 384 0Z"
                fill="#2D8CFF"
              />
              <path
                d="M402.164 342.205C408.958 343.904 414.904 340.507 418.301 335.411C420 332.863 420 328.616 420 319.274V191.027C420 181.685 420 178.288 418.301 174.89C415.753 168.096 408.958 165.548 402.164 168.096C384.327 179.986 345.257 214.808 344.408 229.247C343.728 231.795 343.728 236.041 343.728 241.986V274.26C343.728 281.055 343.728 283.603 344.408 287C345.257 293.795 347.805 299.74 351.203 303.137C361.395 310.781 395.369 341.356 403.013 341.356L402.164 342.205ZM93 197.822C93 185.082 93 178.288 95.5481 174.89C97.2468 171.493 102.343 168.096 104.891 165.548C108.288 163 114.234 163 127.823 163H237.39C269.665 163 285.803 163 298.543 169.795C307.886 176.589 318.078 182.534 324.023 195.274C330.818 208.014 330.818 224.151 330.818 256.425V314.178C330.818 326.918 330.818 333.712 328.27 337.11C326.571 340.507 321.475 343.904 318.927 346.452C315.53 349 309.584 349 295.995 349H186.429C154.153 349 138.016 349 125.275 342.205C115.932 335.411 105.74 329.466 99.7948 316.726C93 303.986 93 287.849 93 255.575V197.822Z"
                fill="white"
              />
            </svg>

            <div className="flex-auto">
              <h3 className="font-bold">Meetup</h3>
              <p>Join our monthly meetup and ask questions!</p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/keploy"
            className="flex items-start space-x-4"
          >
            <svg
              fill="currentColor"
              className="h-12 w-12 flex-none text-black "
            >
              <rect width="48" height="48" rx="12" />
              <path
                d="M23.997 12a12 12 0 00-3.792 23.388c.6.12.816-.264.816-.576l-.012-2.04c-3.336.72-4.044-1.608-4.044-1.608-.552-1.392-1.332-1.764-1.332-1.764-1.08-.744.084-.72.084-.72 1.2.084 1.836 1.236 1.836 1.236 1.08 1.824 2.808 1.296 3.492.996.12-.78.42-1.308.756-1.608-2.664-.3-5.46-1.332-5.46-5.928 0-1.32.468-2.388 1.236-3.228a4.32 4.32 0 01.12-3.168s1.008-.324 3.3 1.224a11.496 11.496 0 016 0c2.292-1.56 3.3-1.224 3.3-1.224.66 1.644.24 2.88.12 3.168.768.84 1.236 1.92 1.236 3.228 0 4.608-2.808 5.616-5.484 5.916.432.372.816 1.104.816 2.22l-.012 3.3c0 .312.216.696.828.576A12 12 0 0023.997 12z"
                fill="currentColor"
                className="text-gray-50"
              />
            </svg>
            <div className="flex-auto">
              <h3 className="font-bold">GitHub</h3>
              <p>Give Keploy a star on GitHub (it helps!)</p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/keployio"
            className="flex items-start space-x-4"
          >
            <svg
              fill="currentColor"
              className="h-12 w-12 flex-none      text-black"
              viewBox="0 0 512 509.64"
            >
              <rect width="509.64" height="512" rx="120" />
              <path
                d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"
                fill="currentColor"
                className="text-white"
              />
            </svg>
            <div className="flex-auto">
              <h3 className="font-bold">Twitter</h3>
              <p>
                Follow <span className="text-blue-400">@keployio</span> for
                Keploy news and events.
              </p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://join.slack.com/t/keploy/shared_invite/zt-12rfbvc01-o54cOG0X1G6eVJTuI_orSA"
            className="flex items-start space-x-4"
          >
            <svg
              className="h-12 w-12 flex-none text-blue-400 "
              viewBox="0 0 1610 1610"
            >
              <title>slack-logo-icon</title>
              <desc>Created with Sketch Beta.</desc>
              <defs />
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="Group">
                  <path
                    d="M338.114754,1017.45902 C338.114754,1110.57377 262.04918,1186.63934 168.934426,1186.63934 C75.8196721,1186.63934 -0.245901639,1110.57377 -0.245901639,1017.45902 C-0.245901639,924.344262 75.8196721,848.278689 168.934426,848.278689 L338.114754,848.278689 L338.114754,1017.45902 L338.114754,1017.45902 Z"
                    fill="#E01E5A"
                  />
                  <path
                    d="M423.360656,1017.45902 C423.360656,924.344262 499.42623,848.278689 592.540984,848.278689 C685.655738,848.278689 761.721311,924.344262 761.721311,1017.45902 L761.721311,1441.06557 C761.721311,1534.18033 685.655738,1610.2459 592.540984,1610.2459 C499.42623,1610.2459 423.360656,1534.18033 423.360656,1441.06557 L423.360656,1017.45902 L423.360656,1017.45902 Z"
                    fill="#E01E5A"
                  />
                  <path
                    d="M592.540984,338.114754 C499.42623,338.114754 423.360656,262.04918 423.360656,168.934426 C423.360656,75.8196721 499.42623,-0.245901639 592.540984,-0.245901639 C685.655738,-0.245901639 761.721311,75.8196721 761.721311,168.934426 L761.721311,338.114754 L592.540984,338.114754 L592.540984,338.114754 Z"
                    fill="#36C5F0"
                  />
                  <path
                    d="M592.540984,423.360656 C685.655738,423.360656 761.721311,499.42623 761.721311,592.540984 C761.721311,685.655738 685.655738,761.721311 592.540984,761.721311 L168.934426,761.721311 C75.8196721,761.721311 -0.245901639,685.655738 -0.245901639,592.540984 C-0.245901639,499.42623 75.8196721,423.360656 168.934426,423.360656 L592.540984,423.360656 L592.540984,423.360656 Z"
                    fill="#36C5F0"
                  />
                  <path
                    d="M1271.88525,592.540984 C1271.88525,499.42623 1347.95082,423.360656 1441.06557,423.360656 C1534.18033,423.360656 1610.2459,499.42623 1610.2459,592.540984 C1610.2459,685.655738 1534.18033,761.721311 1441.06557,761.721311 L1271.88525,761.721311 L1271.88525,592.540984 L1271.88525,592.540984 Z"
                    fill="#2EB67D"
                  />
                  <path
                    d="M1186.63934,592.540984 C1186.63934,685.655738 1110.57377,761.721311 1017.45902,761.721311 C924.344262,761.721311 848.278689,685.655738 848.278689,592.540984 L848.278689,168.934426 C848.278689,75.8196721 924.344262,-0.245901639 1017.45902,-0.245901639 C1110.57377,-0.245901639 1186.63934,75.8196721 1186.63934,168.934426 L1186.63934,592.540984 L1186.63934,592.540984 Z"
                    fill="#2EB67D"
                  />
                  <path
                    d="M1017.45902,1271.88525 C1110.57377,1271.88525 1186.63934,1347.95082 1186.63934,1441.06557 C1186.63934,1534.18033 1110.57377,1610.2459 1017.45902,1610.2459 C924.344262,1610.2459 848.278689,1534.18033 848.278689,1441.06557 L848.278689,1271.88525 L1017.45902,1271.88525 L1017.45902,1271.88525 Z"
                    fill="#ECB22E"
                  />
                  <path
                    d="M1017.45902,1186.63934 C924.344262,1186.63934 848.278689,1110.57377 848.278689,1017.45902 C848.278689,924.344262 924.344262,848.278689 1017.45902,848.278689 L1441.06557,848.278689 C1534.18033,848.278689 1610.2459,924.344262 1610.2459,1017.45902 C1610.2459,1110.57377 1534.18033,1186.63934 1441.06557,1186.63934 L1017.45902,1186.63934 L1017.45902,1186.63934 Z"
                    fill="#ECB22E"
                  />
                </g>
              </g>
            </svg>
            <div className="flex-auto">
              <h3 className="font-bold">Slack</h3>
              <p>Join for live conversations and get support.</p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://keploy.hashnode.dev/"
            className="flex items-start space-x-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-12 w-12 flex-none"
            >
              <path
                d="M17.591 85.533c-23.455 23.455-23.455 61.479 0 84.932l67.943 67.944c23.455 23.453 61.479 23.453 84.932 0l67.944-67.944c23.453-23.455 23.453-61.48 0-84.932L170.466 17.59c-23.455-23.452-61.48-23.452-84.932 0L17.59 85.533Zm140.134 72.193c16.418-16.419 16.418-43.036 0-59.452-16.417-16.419-43.034-16.419-59.45 0-16.419 16.418-16.419 43.033 0 59.452 16.418 16.416 43.033 16.416 59.452 0h-.002Z"
                fill="#2962FF"
                fillRule="evenodd"
              />
            </svg>
            <div className="flex-auto">
              <h3 className="font-bold">Hashnode</h3>
              <p>Explore blogs on API, Testing, Mocks and Keploy.</p>
            </div>
          </a>
        </li>
      </ul>
      <p className="mt-8">
        We are happy to help you with your 🎤 talks, 📝 blogposts (whether on
        our blog or yours) or anything else you want to try. Just {/*<a*/}
        {/*  className="text-blue-400 hover:underline"*/}
        {/*  href="https://keploy.io/careers"*/}
        {/*>*/}
        {/*  job listings,*/}
        {/*</a>*/}
        <a
          className="text-blue-400 hover:underline"
          href="mailto:hello@keploy.io"
        >
          get in touch
        </a>
        !
      </p>
      {/*TODO : Early adopters and contributors*/}
    </section>
  );
};
