/*!
 *
 * yiyi-audio-recorder - js audio recorder plugin
 *
 * @version v1.0.0
 * @homepage https://github.com/1710797241/yiyi-js/tree/master/packages/webSocket
 * @author yiyi <echoweb@126.com> (https://www.zhuyuntao.cn)
 * @license MIT
 *
 */
!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define([], t)
        : "object" == typeof exports
        ? (exports.Recorder = t())
        : (e.Recorder = t());
})(this, function () {
    return (function (e) {
        var t = {};
        function a(n) {
            if (t[n]) return t[n].exports;
            var s = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(s.exports, s, s.exports, a), (s.l = !0), s.exports;
        }
        return (
            (a.m = e),
            (a.c = t),
            (a.d = function (e, t, n) {
                a.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (a.r = function (e) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (a.t = function (e, t) {
                if ((1 & t && (e = a(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var n = Object.create(null);
                if (
                    (a.r(n),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e,
                    }),
                    2 & t && "string" != typeof e)
                )
                    for (var s in e)
                        a.d(
                            n,
                            s,
                            function (t) {
                                return e[t];
                            }.bind(null, s)
                        );
                return n;
            }),
            (a.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return a.d(t, "a", t), t;
            }),
            (a.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (a.p = ""),
            a((a.s = 17))
        );
    })([
        function (e, t) {
            function a(e) {
                return new Int16Array(e);
            }
            function n(e) {
                return new Int32Array(e);
            }
            function s(e) {
                return new Float32Array(e);
            }
            var r = {
                    fill: function (e, t, a, n) {
                        if (2 == arguments.length)
                            for (var s = 0; s < e.length; s++)
                                e[s] = arguments[1];
                        else for (s = t; s < a; s++) e[s] = n;
                    },
                },
                i = {
                    arraycopy: function (e, t, a, n, s) {
                        for (var r = t + s; t < r; ) a[n++] = e[t++];
                    },
                    out: {},
                };
            (i.out.println = function (e) {
                console.log(e);
            }),
                (i.out.printf = function () {
                    console.log.apply(console, arguments);
                });
            var o = {};
            function _(e) {
                this.ordinal = e;
            }
            (o.SQRT2 = 1.4142135623730951),
                (o.FAST_LOG10 = function (e) {
                    return Math.log10(e);
                }),
                (o.FAST_LOG10_X = function (e, t) {
                    return Math.log10(e) * t;
                }),
                (_.short_block_allowed = new _(0)),
                (_.short_block_coupled = new _(1)),
                (_.short_block_dispensed = new _(2)),
                (_.short_block_forced = new _(3));
            var l = {};
            function f(e) {
                this.ordinal = e;
            }
            (l.MAX_VALUE = 34028235e31),
                (f.vbr_off = new f(0)),
                (f.vbr_mt = new f(1)),
                (f.vbr_rh = new f(2)),
                (f.vbr_abr = new f(3)),
                (f.vbr_mtrh = new f(4)),
                (f.vbr_default = f.vbr_mtrh);
            e.exports = {
                System: i,
                VbrMode: f,
                Float: l,
                ShortBlock: _,
                Util: o,
                Arrays: r,
                new_array_n: function e(t) {
                    if (1 == t.length) return new Array(t[0]);
                    var a = t[0];
                    t = t.slice(1);
                    for (var n = [], s = 0; s < a; s++) n.push(e(t));
                    return n;
                },
                new_byte: function (e) {
                    return new Int8Array(e);
                },
                new_double: function (e) {
                    return new Float64Array(e);
                },
                new_float: s,
                new_float_n: function e(t) {
                    if (1 == t.length) return s(t[0]);
                    var a = t[0];
                    t = t.slice(1);
                    for (var n = [], r = 0; r < a; r++) n.push(e(t));
                    return n;
                },
                new_int: n,
                new_int_n: function e(t) {
                    if (1 == t.length) return n(t[0]);
                    var a = t[0];
                    t = t.slice(1);
                    for (var s = [], r = 0; r < a; r++) s.push(e(t));
                    return s;
                },
                new_short: a,
                new_short_n: function e(t) {
                    if (1 == t.length) return a(t[0]);
                    var n = t[0];
                    t = t.slice(1);
                    for (var s = [], r = 0; r < n; r++) s.push(e(t));
                    return s;
                },
                assert: function (e) {},
            };
        },
        function (e, t, a) {
            var n = a(0),
                s = n.System,
                r = n.VbrMode,
                i = (n.Float, n.ShortBlock, n.Util, n.Arrays, n.new_array_n),
                o = (n.new_byte, n.new_double, n.new_float),
                _ = n.new_float_n,
                l = n.new_int,
                f = (n.new_int_n, n.assert);
            function c() {
                var e = a(21),
                    t = a(22),
                    n = a(2),
                    u = c.FFTOFFSET,
                    h = c.MPG_MD_MS_LR,
                    p = null;
                this.psy = null;
                var b = null,
                    m = null,
                    d = null;
                this.setModules = function (e, t, a, n) {
                    (p = e), (this.psy = t), (b = t), (m = n), (d = a);
                };
                var v = new e();
                this.lame_encode_mp3_frame = function (e, a, g, S, w, M) {
                    var A,
                        y = i([2, 2]);
                    (y[0][0] = new t()),
                        (y[0][1] = new t()),
                        (y[1][0] = new t()),
                        (y[1][1] = new t());
                    var R,
                        B = i([2, 2]);
                    (B[0][0] = new t()),
                        (B[0][1] = new t()),
                        (B[1][0] = new t()),
                        (B[1][1] = new t());
                    var E,
                        T,
                        x,
                        k = [null, null],
                        P = e.internal_flags,
                        I = _([2, 4]),
                        V = [0.5, 0.5],
                        O = [
                            [0, 0],
                            [0, 0],
                        ],
                        L = [
                            [0, 0],
                            [0, 0],
                        ];
                    if (
                        ((k[0] = a),
                        (k[1] = g),
                        0 == P.lame_encode_frame_init &&
                            (function (e, t) {
                                var a,
                                    n,
                                    s = e.internal_flags;
                                if (0 == s.lame_encode_frame_init) {
                                    var r,
                                        i,
                                        _ = o(2014),
                                        l = o(2014);
                                    for (
                                        s.lame_encode_frame_init = 1,
                                            r = 0,
                                            i = 0;
                                        r < 286 + 576 * (1 + s.mode_gr);
                                        ++r
                                    )
                                        r < 576 * s.mode_gr
                                            ? ((_[r] = 0),
                                              2 == s.channels_out && (l[r] = 0))
                                            : ((_[r] = t[0][i]),
                                              2 == s.channels_out &&
                                                  (l[r] = t[1][i]),
                                              ++i);
                                    for (n = 0; n < s.mode_gr; n++)
                                        for (a = 0; a < s.channels_out; a++)
                                            s.l3_side.tt[n][a].block_type =
                                                c.SHORT_TYPE;
                                    v.mdct_sub48(s, _, l),
                                        f(576 >= c.FFTOFFSET),
                                        f(
                                            s.mf_size >=
                                                c.BLKSIZE +
                                                    e.framesize -
                                                    c.FFTOFFSET
                                        ),
                                        f(s.mf_size >= 512 + e.framesize - 32);
                                }
                            })(e, k),
                        (P.padding = 0),
                        (P.slot_lag -= P.frac_SpF) < 0 &&
                            ((P.slot_lag += e.out_samplerate), (P.padding = 1)),
                        0 != P.psymodel)
                    ) {
                        var H = [null, null],
                            N = 0,
                            D = l(2);
                        for (x = 0; x < P.mode_gr; x++) {
                            for (T = 0; T < P.channels_out; T++)
                                (H[T] = k[T]),
                                    (N = 576 + 576 * x - c.FFTOFFSET);
                            if (
                                0 !=
                                (e.VBR == r.vbr_mtrh || e.VBR == r.vbr_mt
                                    ? b.L3psycho_anal_vbr(
                                          e,
                                          H,
                                          N,
                                          x,
                                          y,
                                          B,
                                          O[x],
                                          L[x],
                                          I[x],
                                          D
                                      )
                                    : b.L3psycho_anal_ns(
                                          e,
                                          H,
                                          N,
                                          x,
                                          y,
                                          B,
                                          O[x],
                                          L[x],
                                          I[x],
                                          D
                                      ))
                            )
                                return -4;
                            for (
                                e.mode == n.JOINT_STEREO &&
                                    ((V[x] = I[x][2] + I[x][3]),
                                    V[x] > 0 && (V[x] = I[x][3] / V[x])),
                                    T = 0;
                                T < P.channels_out;
                                T++
                            ) {
                                var X = P.l3_side.tt[x][T];
                                (X.block_type = D[T]), (X.mixed_block_flag = 0);
                            }
                        }
                    } else
                        for (x = 0; x < P.mode_gr; x++)
                            for (T = 0; T < P.channels_out; T++)
                                (P.l3_side.tt[x][T].block_type = c.NORM_TYPE),
                                    (P.l3_side.tt[x][T].mixed_block_flag = 0),
                                    (L[x][T] = O[x][T] = 700);
                    if (
                        ((function (e) {
                            var t, a;
                            if (0 != e.ATH.useAdjust)
                                if (
                                    ((a = e.loudness_sq[0][0]),
                                    (t = e.loudness_sq[1][0]),
                                    2 == e.channels_out
                                        ? ((a += e.loudness_sq[0][1]),
                                          (t += e.loudness_sq[1][1]))
                                        : ((a += a), (t += t)),
                                    2 == e.mode_gr && (a = Math.max(a, t)),
                                    (a *= 0.5),
                                    (a *= e.ATH.aaSensitivityP) > 0.03125)
                                )
                                    e.ATH.adjust >= 1
                                        ? (e.ATH.adjust = 1)
                                        : e.ATH.adjust < e.ATH.adjustLimit &&
                                          (e.ATH.adjust = e.ATH.adjustLimit),
                                        (e.ATH.adjustLimit = 1);
                                else {
                                    var n = 31.98 * a + 625e-6;
                                    e.ATH.adjust >= n
                                        ? ((e.ATH.adjust *= 0.075 * n + 0.925),
                                          e.ATH.adjust < n &&
                                              (e.ATH.adjust = n))
                                        : e.ATH.adjustLimit >= n
                                        ? (e.ATH.adjust = n)
                                        : e.ATH.adjust < e.ATH.adjustLimit &&
                                          (e.ATH.adjust = e.ATH.adjustLimit),
                                        (e.ATH.adjustLimit = n);
                                }
                            else e.ATH.adjust = 1;
                        })(P),
                        v.mdct_sub48(P, k[0], k[1]),
                        (P.mode_ext = c.MPG_MD_LR_LR),
                        e.force_ms)
                    )
                        P.mode_ext = c.MPG_MD_MS_LR;
                    else if (e.mode == n.JOINT_STEREO) {
                        var C = 0,
                            F = 0;
                        for (x = 0; x < P.mode_gr; x++)
                            for (T = 0; T < P.channels_out; T++)
                                (C += L[x][T]), (F += O[x][T]);
                        if (C <= 1 * F) {
                            var q = P.l3_side.tt[0],
                                Y = P.l3_side.tt[P.mode_gr - 1];
                            q[0].block_type == q[1].block_type &&
                                Y[0].block_type == Y[1].block_type &&
                                (P.mode_ext = c.MPG_MD_MS_LR);
                        }
                    }
                    if (
                        (P.mode_ext == h
                            ? ((R = B), (E = L))
                            : ((R = y), (E = O)),
                        e.analysis && null != P.pinfo)
                    )
                        for (x = 0; x < P.mode_gr; x++)
                            for (T = 0; T < P.channels_out; T++)
                                (P.pinfo.ms_ratio[x] = P.ms_ratio[x]),
                                    (P.pinfo.ms_ener_ratio[x] = V[x]),
                                    (P.pinfo.blocktype[x][T] =
                                        P.l3_side.tt[x][T].block_type),
                                    (P.pinfo.pe[x][T] = E[x][T]),
                                    s.arraycopy(
                                        P.l3_side.tt[x][T].xr,
                                        0,
                                        P.pinfo.xr[x][T],
                                        0,
                                        576
                                    ),
                                    P.mode_ext == h &&
                                        ((P.pinfo.ers[x][T] =
                                            P.pinfo.ers[x][T + 2]),
                                        s.arraycopy(
                                            P.pinfo.energy[x][T + 2],
                                            0,
                                            P.pinfo.energy[x][T],
                                            0,
                                            P.pinfo.energy[x][T].length
                                        ));
                    if (e.VBR == r.vbr_off || e.VBR == r.vbr_abr) {
                        var j, U;
                        for (j = 0; j < 18; j++)
                            P.nsPsy.pefirbuf[j] = P.nsPsy.pefirbuf[j + 1];
                        for (U = 0, x = 0; x < P.mode_gr; x++)
                            for (T = 0; T < P.channels_out; T++) U += E[x][T];
                        for (
                            P.nsPsy.pefirbuf[18] = U,
                                U = P.nsPsy.pefirbuf[9],
                                j = 0;
                            j < 9;
                            j++
                        )
                            U +=
                                (P.nsPsy.pefirbuf[j] +
                                    P.nsPsy.pefirbuf[18 - j]) *
                                c.fircoef[j];
                        for (
                            U = (3350 * P.mode_gr * P.channels_out) / U, x = 0;
                            x < P.mode_gr;
                            x++
                        )
                            for (T = 0; T < P.channels_out; T++) E[x][T] *= U;
                    }
                    if (
                        (P.iteration_loop.iteration_loop(e, E, V, R),
                        p.format_bitstream(e),
                        (A = p.copy_buffer(P, S, w, M, 1)),
                        e.bWriteVbrTag && m.addVbrFrame(e),
                        e.analysis && null != P.pinfo)
                    ) {
                        for (T = 0; T < P.channels_out; T++) {
                            var z;
                            for (z = 0; z < u; z++)
                                P.pinfo.pcmdata[T][z] =
                                    P.pinfo.pcmdata[T][z + e.framesize];
                            for (z = u; z < 1600; z++)
                                P.pinfo.pcmdata[T][z] = k[T][z - u];
                        }
                        d.set_frame_pinfo(e, R);
                    }
                    return (
                        (function (e) {
                            var t, a;
                            for (
                                f(0 <= e.bitrate_index && e.bitrate_index < 16),
                                    f(0 <= e.mode_ext && e.mode_ext < 4),
                                    e.bitrate_stereoMode_Hist[
                                        e.bitrate_index
                                    ][4]++,
                                    e.bitrate_stereoMode_Hist[15][4]++,
                                    2 == e.channels_out &&
                                        (e.bitrate_stereoMode_Hist[
                                            e.bitrate_index
                                        ][e.mode_ext]++,
                                        e.bitrate_stereoMode_Hist[15][
                                            e.mode_ext
                                        ]++),
                                    t = 0;
                                t < e.mode_gr;
                                ++t
                            )
                                for (a = 0; a < e.channels_out; ++a) {
                                    var n = 0 | e.l3_side.tt[t][a].block_type;
                                    0 != e.l3_side.tt[t][a].mixed_block_flag &&
                                        (n = 4),
                                        e.bitrate_blockType_Hist[
                                            e.bitrate_index
                                        ][n]++,
                                        e.bitrate_blockType_Hist[
                                            e.bitrate_index
                                        ][5]++,
                                        e.bitrate_blockType_Hist[15][n]++,
                                        e.bitrate_blockType_Hist[15][5]++;
                                }
                        })(P),
                        A
                    );
                };
            }
            (c.ENCDELAY = 576),
                (c.POSTDELAY = 1152),
                (c.MDCTDELAY = 48),
                (c.FFTOFFSET = 224 + c.MDCTDELAY),
                (c.DECDELAY = 528),
                (c.SBLIMIT = 32),
                (c.CBANDS = 64),
                (c.SBPSY_l = 21),
                (c.SBPSY_s = 12),
                (c.SBMAX_l = 22),
                (c.SBMAX_s = 13),
                (c.PSFB21 = 6),
                (c.PSFB12 = 6),
                (c.BLKSIZE = 1024),
                (c.HBLKSIZE = c.BLKSIZE / 2 + 1),
                (c.BLKSIZE_s = 256),
                (c.HBLKSIZE_s = c.BLKSIZE_s / 2 + 1),
                (c.NORM_TYPE = 0),
                (c.START_TYPE = 1),
                (c.SHORT_TYPE = 2),
                (c.STOP_TYPE = 3),
                (c.MPG_MD_LR_LR = 0),
                (c.MPG_MD_LR_I = 1),
                (c.MPG_MD_MS_LR = 2),
                (c.MPG_MD_MS_I = 3),
                (c.fircoef = [
                    -0.1039435,
                    -0.1892065,
                    5 * -0.0432472,
                    -0.155915,
                    3898045e-23,
                    0.0467745 * 5,
                    0.50455,
                    0.756825,
                    0.187098 * 5,
                ]),
                (e.exports = c);
        },
        function (e, t) {
            function a(e) {
                var t = e;
                this.ordinal = function () {
                    return t;
                };
            }
            (a.STEREO = new a(0)),
                (a.JOINT_STEREO = new a(1)),
                (a.DUAL_CHANNEL = new a(2)),
                (a.MONO = new a(3)),
                (a.NOT_SET = new a(4)),
                (e.exports = a);
        },
        function (e, t, a) {
            var n = a(0),
                s =
                    (n.System,
                    n.VbrMode,
                    n.Float,
                    n.ShortBlock,
                    n.Util,
                    n.Arrays,
                    n.new_array_n,
                    n.new_byte),
                r = n.new_double,
                i = n.new_float,
                o = n.new_float_n,
                _ = n.new_int,
                l = n.new_int_n,
                f = (n.assert, a(24)),
                c = a(12),
                u = a(25),
                h = a(26),
                p = a(11),
                b = a(1),
                m = a(4);
            function d() {
                function e() {
                    (this.write_timing = 0), (this.ptr = 0), (this.buf = s(40));
                }
                (this.Class_ID = 0),
                    (this.lame_encode_frame_init = 0),
                    (this.iteration_init_init = 0),
                    (this.fill_buffer_resample_init = 0),
                    (this.mfbuf = o([2, d.MFSIZE])),
                    (this.mode_gr = 0),
                    (this.channels_in = 0),
                    (this.channels_out = 0),
                    (this.resample_ratio = 0),
                    (this.mf_samples_to_encode = 0),
                    (this.mf_size = 0),
                    (this.VBR_min_bitrate = 0),
                    (this.VBR_max_bitrate = 0),
                    (this.bitrate_index = 0),
                    (this.samplerate_index = 0),
                    (this.mode_ext = 0),
                    (this.lowpass1 = 0),
                    (this.lowpass2 = 0),
                    (this.highpass1 = 0),
                    (this.highpass2 = 0),
                    (this.noise_shaping = 0),
                    (this.noise_shaping_amp = 0),
                    (this.substep_shaping = 0),
                    (this.psymodel = 0),
                    (this.noise_shaping_stop = 0),
                    (this.subblock_gain = 0),
                    (this.use_best_huffman = 0),
                    (this.full_outer_loop = 0),
                    (this.l3_side = new f()),
                    (this.ms_ratio = i(2)),
                    (this.padding = 0),
                    (this.frac_SpF = 0),
                    (this.slot_lag = 0),
                    (this.tag_spec = null),
                    (this.nMusicCRC = 0),
                    (this.OldValue = _(2)),
                    (this.CurrentStep = _(2)),
                    (this.masking_lower = 0),
                    (this.bv_scf = _(576)),
                    (this.pseudohalf = _(m.SFBMAX)),
                    (this.sfb21_extra = !1),
                    (this.inbuf_old = new Array(2)),
                    (this.blackfilt = new Array(2 * d.BPC + 1)),
                    (this.itime = r(2)),
                    (this.sideinfo_len = 0),
                    (this.sb_sample = o([2, 2, 18, b.SBLIMIT])),
                    (this.amp_filter = i(32)),
                    (this.header = new Array(d.MAX_HEADER_BUF)),
                    (this.h_ptr = 0),
                    (this.w_ptr = 0),
                    (this.ancillary_flag = 0),
                    (this.ResvSize = 0),
                    (this.ResvMax = 0),
                    (this.scalefac_band = new c()),
                    (this.minval_l = i(b.CBANDS)),
                    (this.minval_s = i(b.CBANDS)),
                    (this.nb_1 = o([4, b.CBANDS])),
                    (this.nb_2 = o([4, b.CBANDS])),
                    (this.nb_s1 = o([4, b.CBANDS])),
                    (this.nb_s2 = o([4, b.CBANDS])),
                    (this.s3_ss = null),
                    (this.s3_ll = null),
                    (this.decay = 0),
                    (this.thm = new Array(4)),
                    (this.en = new Array(4)),
                    (this.tot_ener = i(4)),
                    (this.loudness_sq = o([2, 2])),
                    (this.loudness_sq_save = i(2)),
                    (this.mld_l = i(b.SBMAX_l)),
                    (this.mld_s = i(b.SBMAX_s)),
                    (this.bm_l = _(b.SBMAX_l)),
                    (this.bo_l = _(b.SBMAX_l)),
                    (this.bm_s = _(b.SBMAX_s)),
                    (this.bo_s = _(b.SBMAX_s)),
                    (this.npart_l = 0),
                    (this.npart_s = 0),
                    (this.s3ind = l([b.CBANDS, 2])),
                    (this.s3ind_s = l([b.CBANDS, 2])),
                    (this.numlines_s = _(b.CBANDS)),
                    (this.numlines_l = _(b.CBANDS)),
                    (this.rnumlines_l = i(b.CBANDS)),
                    (this.mld_cb_l = i(b.CBANDS)),
                    (this.mld_cb_s = i(b.CBANDS)),
                    (this.numlines_s_num1 = 0),
                    (this.numlines_l_num1 = 0),
                    (this.pe = i(4)),
                    (this.ms_ratio_s_old = 0),
                    (this.ms_ratio_l_old = 0),
                    (this.ms_ener_ratio_old = 0),
                    (this.blocktype_old = _(2)),
                    (this.nsPsy = new u()),
                    (this.VBR_seek_table = new h()),
                    (this.ATH = null),
                    (this.PSY = null),
                    (this.nogap_total = 0),
                    (this.nogap_current = 0),
                    (this.decode_on_the_fly = !0),
                    (this.findReplayGain = !0),
                    (this.findPeakSample = !0),
                    (this.PeakSample = 0),
                    (this.RadioGain = 0),
                    (this.AudiophileGain = 0),
                    (this.rgdata = null),
                    (this.noclipGainChange = 0),
                    (this.noclipScale = 0),
                    (this.bitrate_stereoMode_Hist = l([16, 5])),
                    (this.bitrate_blockType_Hist = l([16, 6])),
                    (this.pinfo = null),
                    (this.hip = null),
                    (this.in_buffer_nsamples = 0),
                    (this.in_buffer_0 = null),
                    (this.in_buffer_1 = null),
                    (this.iteration_loop = null);
                for (var t = 0; t < this.en.length; t++) this.en[t] = new p();
                for (t = 0; t < this.thm.length; t++) this.thm[t] = new p();
                for (t = 0; t < this.header.length; t++)
                    this.header[t] = new e();
            }
            (d.MFSIZE = 3456 + b.ENCDELAY - b.MDCTDELAY),
                (d.MAX_HEADER_BUF = 256),
                (d.MAX_BITS_PER_CHANNEL = 4095),
                (d.MAX_BITS_PER_GRANULE = 7680),
                (d.BPC = 320),
                (e.exports = d);
        },
        function (e, t, a) {
            var n = a(1),
                s = {};
            (s.SFBMAX = 3 * n.SBMAX_s), (e.exports = s);
        },
        function (e, t, a) {
            var n = a(0),
                s = n.System,
                r = n.VbrMode,
                i = (n.Float, n.ShortBlock),
                o =
                    (n.Util,
                    n.Arrays,
                    n.new_array_n,
                    n.new_byte,
                    n.new_double,
                    n.new_float),
                _ = (n.new_float_n, n.new_int, n.new_int_n),
                l = n.new_short_n,
                f = n.assert,
                c = a(19),
                u = a(23),
                h = a(3),
                p = a(27),
                b = a(28),
                m = a(29),
                d = a(7),
                v = a(8),
                g = a(1);
            e.exports = function e() {
                var t,
                    n,
                    S,
                    w,
                    M,
                    A = a(2),
                    y = this;
                (e.V9 = 410),
                    (e.V8 = 420),
                    (e.V7 = 430),
                    (e.V6 = 440),
                    (e.V5 = 450),
                    (e.V4 = 460),
                    (e.V3 = 470),
                    (e.V2 = 480),
                    (e.V1 = 490),
                    (e.V0 = 500),
                    (e.R3MIX = 1e3),
                    (e.STANDARD = 1001),
                    (e.EXTREME = 1002),
                    (e.INSANE = 1003),
                    (e.STANDARD_FAST = 1004),
                    (e.EXTREME_FAST = 1005),
                    (e.MEDIUM = 1006),
                    (e.MEDIUM_FAST = 1007),
                    (e.LAME_MAXMP3BUFFER = 147456);
                var R,
                    B,
                    E,
                    T = new c();
                function x() {
                    (this.mask_adjust = 0),
                        (this.mask_adjust_short = 0),
                        (this.bo_l_weight = o(g.SBMAX_l)),
                        (this.bo_s_weight = o(g.SBMAX_s));
                }
                function k() {
                    this.lowerlimit = 0;
                }
                function P(e, t) {
                    this.lowpass = t;
                }
                function I(e) {
                    return e > 1 ? 0 : e <= 0 ? 1 : Math.cos((Math.PI / 2) * e);
                }
                function V(e, t) {
                    switch (e) {
                        case 44100:
                            return (t.version = 1), 0;
                        case 48e3:
                            return (t.version = 1), 1;
                        case 32e3:
                            return (t.version = 1), 2;
                        case 22050:
                            return (t.version = 0), 0;
                        case 24e3:
                            return (t.version = 0), 1;
                        case 16e3:
                            return (t.version = 0), 2;
                        case 11025:
                            return (t.version = 0), 0;
                        case 12e3:
                            return (t.version = 0), 1;
                        case 8e3:
                            return (t.version = 0), 2;
                        default:
                            return (t.version = 0), -1;
                    }
                }
                function O(e, t, a) {
                    a < 16e3 && (t = 2);
                    for (var n = v.bitrate_table[t][1], s = 2; s <= 14; s++)
                        v.bitrate_table[t][s] > 0 &&
                            Math.abs(v.bitrate_table[t][s] - e) <
                                Math.abs(n - e) &&
                            (n = v.bitrate_table[t][s]);
                    return n;
                }
                function L(e, t, a) {
                    a < 16e3 && (t = 2);
                    for (var n = 0; n <= 14; n++)
                        if (
                            v.bitrate_table[t][n] > 0 &&
                            v.bitrate_table[t][n] == e
                        )
                            return n;
                    return -1;
                }
                function H(e, t) {
                    var a = [
                            new P(8, 2e3),
                            new P(16, 3700),
                            new P(24, 3900),
                            new P(32, 5500),
                            new P(40, 7e3),
                            new P(48, 7500),
                            new P(56, 1e4),
                            new P(64, 11e3),
                            new P(80, 13500),
                            new P(96, 15100),
                            new P(112, 15600),
                            new P(128, 17e3),
                            new P(160, 17500),
                            new P(192, 18600),
                            new P(224, 19400),
                            new P(256, 19700),
                            new P(320, 20500),
                        ],
                        n = y.nearestBitrateFullIndex(t);
                    e.lowerlimit = a[n].lowpass;
                }
                function N(e) {
                    var t = g.BLKSIZE + e.framesize - g.FFTOFFSET;
                    return (
                        (t = Math.max(t, 512 + e.framesize - 32)),
                        f(h.MFSIZE >= t),
                        t
                    );
                }
                function D(e, t, a, n, s, r) {
                    var i = y.enc.lame_encode_mp3_frame(e, t, a, n, s, r);
                    return e.frameNum++, i;
                }
                function X() {
                    (this.n_in = 0), (this.n_out = 0);
                }
                function C() {
                    this.num_used = 0;
                }
                function F(e, t, a) {
                    var n = Math.PI * t;
                    (e /= a) < 0 && (e = 0), e > 1 && (e = 1);
                    var s = e - 0.5,
                        r =
                            0.42 -
                            0.5 * Math.cos(2 * e * Math.PI) +
                            0.08 * Math.cos(4 * e * Math.PI);
                    return Math.abs(s) < 1e-9
                        ? n / Math.PI
                        : (r * Math.sin(a * n * s)) / (Math.PI * a * s);
                }
                function q(e, t, a, n, s, r, i, _, l) {
                    var c,
                        u,
                        p = e.internal_flags,
                        b = 0,
                        m =
                            e.out_samplerate /
                            (function e(t, a) {
                                return 0 != a ? e(a, t % a) : t;
                            })(e.out_samplerate, e.in_samplerate);
                    m > h.BPC && (m = h.BPC);
                    var d =
                            Math.abs(
                                p.resample_ratio -
                                    Math.floor(0.5 + p.resample_ratio)
                            ) < 1e-4
                                ? 1
                                : 0,
                        v = 1 / p.resample_ratio;
                    v > 1 && (v = 1);
                    var g = 31;
                    0 == g % 2 && --g;
                    var S = (g += d) + 1;
                    if (0 == p.fill_buffer_resample_init) {
                        for (
                            p.inbuf_old[0] = o(S), p.inbuf_old[1] = o(S), c = 0;
                            c <= 2 * m;
                            ++c
                        )
                            p.blackfilt[c] = o(S);
                        for (
                            p.itime[0] = 0, p.itime[1] = 0, b = 0;
                            b <= 2 * m;
                            b++
                        ) {
                            var w = 0,
                                M = (b - m) / (2 * m);
                            for (c = 0; c <= g; c++)
                                w += p.blackfilt[b][c] = F(c - M, v, g);
                            for (c = 0; c <= g; c++) p.blackfilt[b][c] /= w;
                        }
                        p.fill_buffer_resample_init = 1;
                    }
                    var A = p.inbuf_old[l];
                    for (u = 0; u < n; u++) {
                        var y, R;
                        if (
                            ((y = u * p.resample_ratio),
                            g + (b = 0 | Math.floor(y - p.itime[l])) - g / 2 >=
                                i)
                        )
                            break;
                        M = y - p.itime[l] - (b + (g % 2) * 0.5);
                        f(Math.abs(M) <= 0.501),
                            (R = 0 | Math.floor(2 * M * m + m + 0.5));
                        var B = 0;
                        for (c = 0; c <= g; ++c) {
                            var E = 0 | (c + b - g / 2);
                            f(E < i),
                                f(E + S >= 0),
                                (B +=
                                    (E < 0 ? A[S + E] : s[r + E]) *
                                    p.blackfilt[R][c]);
                        }
                        t[a + u] = B;
                    }
                    if (
                        ((_.num_used = Math.min(i, g + b - g / 2)),
                        (p.itime[l] += _.num_used - u * p.resample_ratio),
                        _.num_used >= S)
                    )
                        for (c = 0; c < S; c++)
                            A[c] = s[r + _.num_used + c - S];
                    else {
                        var T = S - _.num_used;
                        for (c = 0; c < T; ++c) A[c] = A[c + _.num_used];
                        for (b = 0; c < S; ++c, ++b) A[c] = s[r + b];
                        f(b == _.num_used);
                    }
                    return u;
                }
                function Y(e, t, a, n, s, r) {
                    var i = e.internal_flags;
                    if (i.resample_ratio < 0.9999 || i.resample_ratio > 1.0001)
                        for (var o = 0; o < i.channels_out; o++) {
                            var _ = new C();
                            (r.n_out = q(
                                e,
                                t[o],
                                i.mf_size,
                                e.framesize,
                                a[o],
                                n,
                                s,
                                _,
                                o
                            )),
                                (r.n_in = _.num_used);
                        }
                    else {
                        (r.n_out = Math.min(e.framesize, s)),
                            (r.n_in = r.n_out);
                        for (var l = 0; l < r.n_out; ++l)
                            (t[0][i.mf_size + l] = a[0][n + l]),
                                2 == i.channels_out &&
                                    (t[1][i.mf_size + l] = a[1][n + l]);
                    }
                }
                (this.enc = new g()),
                    (this.setModules = function (e, a, s, r, i, o, _, l, f) {
                        (t = e),
                            (n = a),
                            (S = s),
                            (w = r),
                            (M = i),
                            (R = o),
                            _,
                            (B = l),
                            (E = f),
                            this.enc.setModules(n, T, w, R);
                    }),
                    (this.lame_init = function () {
                        var e = new u();
                        return 0 !=
                            (function (e) {
                                var t;
                                return (
                                    (e.class_id = 4294479419),
                                    (t = e.internal_flags = new h()),
                                    (e.mode = A.NOT_SET),
                                    (e.original = 1),
                                    (e.in_samplerate = 44100),
                                    (e.num_channels = 2),
                                    (e.num_samples = -1),
                                    (e.bWriteVbrTag = !0),
                                    (e.quality = -1),
                                    (e.short_blocks = null),
                                    (t.subblock_gain = -1),
                                    (e.lowpassfreq = 0),
                                    (e.highpassfreq = 0),
                                    (e.lowpasswidth = -1),
                                    (e.highpasswidth = -1),
                                    (e.VBR = r.vbr_off),
                                    (e.VBR_q = 4),
                                    (e.ATHcurve = -1),
                                    (e.VBR_mean_bitrate_kbps = 128),
                                    (e.VBR_min_bitrate_kbps = 0),
                                    (e.VBR_max_bitrate_kbps = 0),
                                    (e.VBR_hard_min = 0),
                                    (t.VBR_min_bitrate = 1),
                                    (t.VBR_max_bitrate = 13),
                                    (e.quant_comp = -1),
                                    (e.quant_comp_short = -1),
                                    (e.msfix = -1),
                                    (t.resample_ratio = 1),
                                    (t.OldValue[0] = 180),
                                    (t.OldValue[1] = 180),
                                    (t.CurrentStep[0] = 4),
                                    (t.CurrentStep[1] = 4),
                                    (t.masking_lower = 1),
                                    (t.nsPsy.attackthre = -1),
                                    (t.nsPsy.attackthre_s = -1),
                                    (e.scale = -1),
                                    (e.athaa_type = -1),
                                    (e.ATHtype = -1),
                                    (e.athaa_loudapprox = -1),
                                    (e.athaa_sensitivity = 0),
                                    (e.useTemporal = null),
                                    (e.interChRatio = -1),
                                    (t.mf_samples_to_encode =
                                        g.ENCDELAY + g.POSTDELAY),
                                    (e.encoder_padding = 0),
                                    (t.mf_size = g.ENCDELAY - g.MDCTDELAY),
                                    (e.findReplayGain = !1),
                                    (e.decode_on_the_fly = !1),
                                    (t.decode_on_the_fly = !1),
                                    (t.findReplayGain = !1),
                                    (t.findPeakSample = !1),
                                    (t.RadioGain = 0),
                                    (t.AudiophileGain = 0),
                                    (t.noclipGainChange = 0),
                                    (t.noclipScale = -1),
                                    (e.preset = 0),
                                    (e.write_id3tag_automatic = !0),
                                    0
                                );
                            })(e)
                            ? null
                            : ((e.lame_allocated_gfp = 1), e);
                    }),
                    (this.nearestBitrateFullIndex = function (e) {
                        var t = [
                                8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128,
                                160, 192, 224, 256, 320,
                            ],
                            a = 0,
                            n = 0,
                            s = 0,
                            r = 0;
                        (r = t[16]), (s = 16), (n = t[16]), (a = 16);
                        for (var i = 0; i < 16; i++)
                            if (Math.max(e, t[i + 1]) != e) {
                                (r = t[i + 1]),
                                    (s = i + 1),
                                    (n = t[i]),
                                    (a = i);
                                break;
                            }
                        return r - e > e - n ? a : s;
                    }),
                    (this.lame_init_params = function (e) {
                        var a,
                            o,
                            l,
                            u = e.internal_flags;
                        if (
                            ((u.Class_ID = 0),
                            null == u.ATH && (u.ATH = new p()),
                            null == u.PSY && (u.PSY = new x()),
                            null == u.rgdata && (u.rgdata = new b()),
                            (u.channels_in = e.num_channels),
                            1 == u.channels_in && (e.mode = A.MONO),
                            (u.channels_out = e.mode == A.MONO ? 1 : 2),
                            (u.mode_ext = g.MPG_MD_MS_LR),
                            e.mode == A.MONO && (e.force_ms = !1),
                            e.VBR == r.vbr_off &&
                                128 != e.VBR_mean_bitrate_kbps &&
                                0 == e.brate &&
                                (e.brate = e.VBR_mean_bitrate_kbps),
                            e.VBR == r.vbr_off ||
                                e.VBR == r.vbr_mtrh ||
                                e.VBR == r.vbr_mt ||
                                (e.free_format = !1),
                            e.VBR == r.vbr_off &&
                                0 == e.brate &&
                                d.EQ(e.compression_ratio, 0) &&
                                (e.compression_ratio = 11.025),
                            e.VBR == r.vbr_off &&
                                e.compression_ratio > 0 &&
                                (0 == e.out_samplerate &&
                                    (e.out_samplerate = map2MP3Frequency(
                                        int(0.97 * e.in_samplerate)
                                    )),
                                (e.brate =
                                    0 |
                                    ((16 * e.out_samplerate * u.channels_out) /
                                        (1e3 * e.compression_ratio))),
                                (u.samplerate_index = V(e.out_samplerate, e)),
                                e.free_format ||
                                    (e.brate = O(
                                        e.brate,
                                        e.version,
                                        e.out_samplerate
                                    ))),
                            0 != e.out_samplerate &&
                                (e.out_samplerate < 16e3
                                    ? ((e.VBR_mean_bitrate_kbps = Math.max(
                                          e.VBR_mean_bitrate_kbps,
                                          8
                                      )),
                                      (e.VBR_mean_bitrate_kbps = Math.min(
                                          e.VBR_mean_bitrate_kbps,
                                          64
                                      )))
                                    : e.out_samplerate < 32e3
                                    ? ((e.VBR_mean_bitrate_kbps = Math.max(
                                          e.VBR_mean_bitrate_kbps,
                                          8
                                      )),
                                      (e.VBR_mean_bitrate_kbps = Math.min(
                                          e.VBR_mean_bitrate_kbps,
                                          160
                                      )))
                                    : ((e.VBR_mean_bitrate_kbps = Math.max(
                                          e.VBR_mean_bitrate_kbps,
                                          32
                                      )),
                                      (e.VBR_mean_bitrate_kbps = Math.min(
                                          e.VBR_mean_bitrate_kbps,
                                          320
                                      )))),
                            0 == e.lowpassfreq)
                        ) {
                            var h = 16e3;
                            switch (e.VBR) {
                                case r.vbr_off:
                                    H((y = new k()), e.brate),
                                        (h = y.lowerlimit);
                                    break;
                                case r.vbr_abr:
                                    var y;
                                    H((y = new k()), e.VBR_mean_bitrate_kbps),
                                        (h = y.lowerlimit);
                                    break;
                                case r.vbr_rh:
                                    var P = [
                                        19500, 19e3, 18600, 18e3, 17500, 16e3,
                                        15600, 14900, 12500, 1e4, 3950,
                                    ];
                                    if (0 <= e.VBR_q && e.VBR_q <= 9) {
                                        var N = P[e.VBR_q],
                                            D = P[e.VBR_q + 1],
                                            X = e.VBR_q_frac;
                                        h = linear_int(N, D, X);
                                    } else h = 19500;
                                    break;
                                default:
                                    P = [
                                        19500, 19e3, 18500, 18e3, 17500, 16500,
                                        15500, 14500, 12500, 9500, 3950,
                                    ];
                                    if (0 <= e.VBR_q && e.VBR_q <= 9) {
                                        (N = P[e.VBR_q]),
                                            (D = P[e.VBR_q + 1]),
                                            (X = e.VBR_q_frac);
                                        h = linear_int(N, D, X);
                                    } else h = 19500;
                            }
                            e.mode != A.MONO ||
                                (e.VBR != r.vbr_off && e.VBR != r.vbr_abr) ||
                                (h *= 1.5),
                                (e.lowpassfreq = 0 | h);
                        }
                        if (
                            (0 == e.out_samplerate &&
                                (2 * e.lowpassfreq > e.in_samplerate &&
                                    (e.lowpassfreq = e.in_samplerate / 2),
                                (e.out_samplerate =
                                    ((a = 0 | e.lowpassfreq),
                                    (o = e.in_samplerate),
                                    (l = 44100),
                                    o >= 48e3
                                        ? (l = 48e3)
                                        : o >= 44100
                                        ? (l = 44100)
                                        : o >= 32e3
                                        ? (l = 32e3)
                                        : o >= 24e3
                                        ? (l = 24e3)
                                        : o >= 22050
                                        ? (l = 22050)
                                        : o >= 16e3
                                        ? (l = 16e3)
                                        : o >= 12e3
                                        ? (l = 12e3)
                                        : o >= 11025
                                        ? (l = 11025)
                                        : o >= 8e3 && (l = 8e3),
                                    -1 == a
                                        ? l
                                        : (a <= 15960 && (l = 44100),
                                          a <= 15250 && (l = 32e3),
                                          a <= 11220 && (l = 24e3),
                                          a <= 9970 && (l = 22050),
                                          a <= 7230 && (l = 16e3),
                                          a <= 5420 && (l = 12e3),
                                          a <= 4510 && (l = 11025),
                                          a <= 3970 && (l = 8e3),
                                          o < l
                                              ? o > 44100
                                                  ? 48e3
                                                  : o > 32e3
                                                  ? 44100
                                                  : o > 24e3
                                                  ? 32e3
                                                  : o > 22050
                                                  ? 24e3
                                                  : o > 16e3
                                                  ? 22050
                                                  : o > 12e3
                                                  ? 16e3
                                                  : o > 11025
                                                  ? 12e3
                                                  : o > 8e3
                                                  ? 11025
                                                  : 8e3
                                              : l)))),
                            (e.lowpassfreq = Math.min(20500, e.lowpassfreq)),
                            (e.lowpassfreq = Math.min(
                                e.out_samplerate / 2,
                                e.lowpassfreq
                            )),
                            e.VBR == r.vbr_off &&
                                (e.compression_ratio =
                                    (16 * e.out_samplerate * u.channels_out) /
                                    (1e3 * e.brate)),
                            e.VBR == r.vbr_abr &&
                                (e.compression_ratio =
                                    (16 * e.out_samplerate * u.channels_out) /
                                    (1e3 * e.VBR_mean_bitrate_kbps)),
                            e.bWriteVbrTag ||
                                ((e.findReplayGain = !1),
                                (e.decode_on_the_fly = !1),
                                (u.findPeakSample = !1)),
                            (u.findReplayGain = e.findReplayGain),
                            (u.decode_on_the_fly = e.decode_on_the_fly),
                            u.decode_on_the_fly && (u.findPeakSample = !0),
                            u.findReplayGain &&
                                t.InitGainAnalysis(
                                    u.rgdata,
                                    e.out_samplerate
                                ) == GainAnalysis.INIT_GAIN_ANALYSIS_ERROR)
                        )
                            return (e.internal_flags = null), -6;
                        switch (
                            (u.decode_on_the_fly &&
                                !e.decode_only &&
                                (null != u.hip && E.hip_decode_exit(u.hip),
                                (u.hip = E.hip_decode_init())),
                            (u.mode_gr = e.out_samplerate <= 24e3 ? 1 : 2),
                            (e.framesize = 576 * u.mode_gr),
                            (e.encoder_delay = g.ENCDELAY),
                            (u.resample_ratio =
                                e.in_samplerate / e.out_samplerate),
                            e.VBR)
                        ) {
                            case r.vbr_mt:
                            case r.vbr_rh:
                            case r.vbr_mtrh:
                                e.compression_ratio = [
                                    5.7, 6.5, 7.3, 8.2, 10, 11.9, 13, 14, 15,
                                    16.5,
                                ][e.VBR_q];
                                break;
                            case r.vbr_abr:
                                e.compression_ratio =
                                    (16 * e.out_samplerate * u.channels_out) /
                                    (1e3 * e.VBR_mean_bitrate_kbps);
                                break;
                            default:
                                e.compression_ratio =
                                    (16 * e.out_samplerate * u.channels_out) /
                                    (1e3 * e.brate);
                        }
                        if (
                            (e.mode == A.NOT_SET && (e.mode = A.JOINT_STEREO),
                            e.highpassfreq > 0
                                ? ((u.highpass1 = 2 * e.highpassfreq),
                                  e.highpasswidth >= 0
                                      ? (u.highpass2 =
                                            2 *
                                            (e.highpassfreq + e.highpasswidth))
                                      : (u.highpass2 = 2 * e.highpassfreq),
                                  (u.highpass1 /= e.out_samplerate),
                                  (u.highpass2 /= e.out_samplerate))
                                : ((u.highpass1 = 0), (u.highpass2 = 0)),
                            e.lowpassfreq > 0
                                ? ((u.lowpass2 = 2 * e.lowpassfreq),
                                  e.lowpasswidth >= 0
                                      ? ((u.lowpass1 =
                                            2 *
                                            (e.lowpassfreq - e.lowpasswidth)),
                                        u.lowpass1 < 0 && (u.lowpass1 = 0))
                                      : (u.lowpass1 = 2 * e.lowpassfreq),
                                  (u.lowpass1 /= e.out_samplerate),
                                  (u.lowpass2 /= e.out_samplerate))
                                : ((u.lowpass1 = 0), (u.lowpass2 = 0)),
                            (function (e) {
                                var t = e.internal_flags,
                                    a = 32,
                                    n = -1;
                                if (t.lowpass1 > 0) {
                                    for (var r = 999, i = 0; i <= 31; i++) {
                                        (f = i / 31) >= t.lowpass2 &&
                                            (a = Math.min(a, i)),
                                            t.lowpass1 < f &&
                                                f < t.lowpass2 &&
                                                (r = Math.min(r, i));
                                    }
                                    (t.lowpass1 =
                                        999 == r
                                            ? (a - 0.75) / 31
                                            : (r - 0.75) / 31),
                                        (t.lowpass2 = a / 31);
                                }
                                if (
                                    (t.highpass2 > 0 &&
                                        t.highpass2 < (0.75 / 31) * 0.9 &&
                                        ((t.highpass1 = 0),
                                        (t.highpass2 = 0),
                                        s.err.println(
                                            "Warning: highpass filter disabled.  highpass frequency too small\n"
                                        )),
                                    t.highpass2 > 0)
                                ) {
                                    var o = -1;
                                    for (i = 0; i <= 31; i++) {
                                        (f = i / 31) <= t.highpass1 &&
                                            (n = Math.max(n, i)),
                                            t.highpass1 < f &&
                                                f < t.highpass2 &&
                                                (o = Math.max(o, i));
                                    }
                                    (t.highpass1 = n / 31),
                                        (t.highpass2 =
                                            -1 == o
                                                ? (n + 0.75) / 31
                                                : (o + 0.75) / 31);
                                }
                                for (i = 0; i < 32; i++) {
                                    var _,
                                        l,
                                        f = i / 31;
                                    (_ =
                                        t.highpass2 > t.highpass1
                                            ? I(
                                                  (t.highpass2 - f) /
                                                      (t.highpass2 -
                                                          t.highpass1 +
                                                          1e-20)
                                              )
                                            : 1),
                                        (l =
                                            t.lowpass2 > t.lowpass1
                                                ? I(
                                                      (f - t.lowpass1) /
                                                          (t.lowpass2 -
                                                              t.lowpass1 +
                                                              1e-20)
                                                  )
                                                : 1),
                                        (t.amp_filter[i] = _ * l);
                                }
                            })(e),
                            (u.samplerate_index = V(e.out_samplerate, e)),
                            u.samplerate_index < 0)
                        )
                            return (e.internal_flags = null), -1;
                        if (e.VBR == r.vbr_off) {
                            if (e.free_format) u.bitrate_index = 0;
                            else if (
                                ((e.brate = O(
                                    e.brate,
                                    e.version,
                                    e.out_samplerate
                                )),
                                (u.bitrate_index = L(
                                    e.brate,
                                    e.version,
                                    e.out_samplerate
                                )),
                                u.bitrate_index <= 0)
                            )
                                return (e.internal_flags = null), -1;
                        } else u.bitrate_index = 1;
                        e.analysis && (e.bWriteVbrTag = !1),
                            null != u.pinfo && (e.bWriteVbrTag = !1),
                            n.init_bit_stream_w(u);
                        for (
                            var C,
                                F =
                                    u.samplerate_index +
                                    3 * e.version +
                                    6 * (e.out_samplerate < 16e3 ? 1 : 0),
                                q = 0;
                            q < g.SBMAX_l + 1;
                            q++
                        )
                            u.scalefac_band.l[q] = w.sfBandIndex[F].l[q];
                        for (q = 0; q < g.PSFB21 + 1; q++) {
                            var Y =
                                    (u.scalefac_band.l[22] -
                                        u.scalefac_band.l[21]) /
                                    g.PSFB21,
                                j = u.scalefac_band.l[21] + q * Y;
                            u.scalefac_band.psfb21[q] = j;
                        }
                        u.scalefac_band.psfb21[g.PSFB21] = 576;
                        for (q = 0; q < g.SBMAX_s + 1; q++)
                            u.scalefac_band.s[q] = w.sfBandIndex[F].s[q];
                        for (q = 0; q < g.PSFB12 + 1; q++) {
                            (Y =
                                (u.scalefac_band.s[13] -
                                    u.scalefac_band.s[12]) /
                                g.PSFB12),
                                (j = u.scalefac_band.s[12] + q * Y);
                            u.scalefac_band.psfb12[q] = j;
                        }
                        for (
                            u.scalefac_band.psfb12[g.PSFB12] = 192,
                                1 == e.version
                                    ? (u.sideinfo_len =
                                          1 == u.channels_out ? 21 : 36)
                                    : (u.sideinfo_len =
                                          1 == u.channels_out ? 13 : 21),
                                e.error_protection && (u.sideinfo_len += 2),
                                (function (e) {
                                    var t = e.internal_flags;
                                    (e.frameNum = 0),
                                        e.write_id3tag_automatic &&
                                            B.id3tag_write_v2(e),
                                        (t.bitrate_stereoMode_Hist = _([
                                            16, 5,
                                        ])),
                                        (t.bitrate_blockType_Hist = _([16, 6])),
                                        (t.PeakSample = 0),
                                        e.bWriteVbrTag && R.InitVbrTag(e);
                                })(e),
                                u.Class_ID = 4294479419,
                                C = 0;
                            C < 19;
                            C++
                        )
                            u.nsPsy.pefirbuf[C] =
                                700 * u.mode_gr * u.channels_out;
                        switch (
                            (-1 == e.ATHtype && (e.ATHtype = 4),
                            f(e.VBR_q <= 9),
                            f(e.VBR_q >= 0),
                            e.VBR)
                        ) {
                            case r.vbr_mt:
                                e.VBR = r.vbr_mtrh;
                            case r.vbr_mtrh:
                                null == e.useTemporal && (e.useTemporal = !1),
                                    S.apply_preset(e, 500 - 10 * e.VBR_q, 0),
                                    e.quality < 0 &&
                                        (e.quality = LAME_DEFAULT_QUALITY),
                                    e.quality < 5 && (e.quality = 0),
                                    e.quality > 5 && (e.quality = 5),
                                    (u.PSY.mask_adjust = e.maskingadjust),
                                    (u.PSY.mask_adjust_short =
                                        e.maskingadjust_short),
                                    e.experimentalY
                                        ? (u.sfb21_extra = !1)
                                        : (u.sfb21_extra =
                                              e.out_samplerate > 44e3),
                                    (u.iteration_loop = new VBRNewIterationLoop(
                                        M
                                    ));
                                break;
                            case r.vbr_rh:
                                S.apply_preset(e, 500 - 10 * e.VBR_q, 0),
                                    (u.PSY.mask_adjust = e.maskingadjust),
                                    (u.PSY.mask_adjust_short =
                                        e.maskingadjust_short),
                                    e.experimentalY
                                        ? (u.sfb21_extra = !1)
                                        : (u.sfb21_extra =
                                              e.out_samplerate > 44e3),
                                    e.quality > 6 && (e.quality = 6),
                                    e.quality < 0 &&
                                        (e.quality = LAME_DEFAULT_QUALITY),
                                    (u.iteration_loop = new VBROldIterationLoop(
                                        M
                                    ));
                                break;
                            default:
                                var U;
                                (u.sfb21_extra = !1),
                                    e.quality < 0 &&
                                        (e.quality = LAME_DEFAULT_QUALITY),
                                    (U = e.VBR) == r.vbr_off &&
                                        (e.VBR_mean_bitrate_kbps = e.brate),
                                    S.apply_preset(
                                        e,
                                        e.VBR_mean_bitrate_kbps,
                                        0
                                    ),
                                    (e.VBR = U),
                                    (u.PSY.mask_adjust = e.maskingadjust),
                                    (u.PSY.mask_adjust_short =
                                        e.maskingadjust_short),
                                    U == r.vbr_off
                                        ? (u.iteration_loop = new m(M))
                                        : (u.iteration_loop =
                                              new ABRIterationLoop(M));
                        }
                        if ((f(e.scale >= 0), e.VBR != r.vbr_off)) {
                            if (
                                ((u.VBR_min_bitrate = 1),
                                (u.VBR_max_bitrate = 14),
                                e.out_samplerate < 16e3 &&
                                    (u.VBR_max_bitrate = 8),
                                0 != e.VBR_min_bitrate_kbps &&
                                    ((e.VBR_min_bitrate_kbps = O(
                                        e.VBR_min_bitrate_kbps,
                                        e.version,
                                        e.out_samplerate
                                    )),
                                    (u.VBR_min_bitrate = L(
                                        e.VBR_min_bitrate_kbps,
                                        e.version,
                                        e.out_samplerate
                                    )),
                                    u.VBR_min_bitrate < 0))
                            )
                                return -1;
                            if (
                                0 != e.VBR_max_bitrate_kbps &&
                                ((e.VBR_max_bitrate_kbps = O(
                                    e.VBR_max_bitrate_kbps,
                                    e.version,
                                    e.out_samplerate
                                )),
                                (u.VBR_max_bitrate = L(
                                    e.VBR_max_bitrate_kbps,
                                    e.version,
                                    e.out_samplerate
                                )),
                                u.VBR_max_bitrate < 0)
                            )
                                return -1;
                            (e.VBR_min_bitrate_kbps =
                                v.bitrate_table[e.version][u.VBR_min_bitrate]),
                                (e.VBR_max_bitrate_kbps =
                                    v.bitrate_table[e.version][
                                        u.VBR_max_bitrate
                                    ]),
                                (e.VBR_mean_bitrate_kbps = Math.min(
                                    v.bitrate_table[e.version][
                                        u.VBR_max_bitrate
                                    ],
                                    e.VBR_mean_bitrate_kbps
                                )),
                                (e.VBR_mean_bitrate_kbps = Math.max(
                                    v.bitrate_table[e.version][
                                        u.VBR_min_bitrate
                                    ],
                                    e.VBR_mean_bitrate_kbps
                                ));
                        }
                        return (
                            e.tune &&
                                ((u.PSY.mask_adjust += e.tune_value_a),
                                (u.PSY.mask_adjust_short += e.tune_value_a)),
                            (function (e) {
                                var t = e.internal_flags;
                                switch (e.quality) {
                                    default:
                                    case 9:
                                        (t.psymodel = 0),
                                            (t.noise_shaping = 0),
                                            (t.noise_shaping_amp = 0),
                                            (t.noise_shaping_stop = 0),
                                            (t.use_best_huffman = 0),
                                            (t.full_outer_loop = 0);
                                        break;
                                    case 8:
                                        e.quality = 7;
                                    case 7:
                                        (t.psymodel = 1),
                                            (t.noise_shaping = 0),
                                            (t.noise_shaping_amp = 0),
                                            (t.noise_shaping_stop = 0),
                                            (t.use_best_huffman = 0),
                                            (t.full_outer_loop = 0);
                                        break;
                                    case 6:
                                    case 5:
                                        (t.psymodel = 1),
                                            0 == t.noise_shaping &&
                                                (t.noise_shaping = 1),
                                            (t.noise_shaping_amp = 0),
                                            (t.noise_shaping_stop = 0),
                                            -1 == t.subblock_gain &&
                                                (t.subblock_gain = 1),
                                            (t.use_best_huffman = 0),
                                            (t.full_outer_loop = 0);
                                        break;
                                    case 4:
                                        (t.psymodel = 1),
                                            0 == t.noise_shaping &&
                                                (t.noise_shaping = 1),
                                            (t.noise_shaping_amp = 0),
                                            (t.noise_shaping_stop = 0),
                                            -1 == t.subblock_gain &&
                                                (t.subblock_gain = 1),
                                            (t.use_best_huffman = 1),
                                            (t.full_outer_loop = 0);
                                        break;
                                    case 3:
                                        (t.psymodel = 1),
                                            0 == t.noise_shaping &&
                                                (t.noise_shaping = 1),
                                            (t.noise_shaping_amp = 1),
                                            (t.noise_shaping_stop = 1),
                                            -1 == t.subblock_gain &&
                                                (t.subblock_gain = 1),
                                            (t.use_best_huffman = 1),
                                            (t.full_outer_loop = 0);
                                        break;
                                    case 2:
                                        (t.psymodel = 1),
                                            0 == t.noise_shaping &&
                                                (t.noise_shaping = 1),
                                            0 == t.substep_shaping &&
                                                (t.substep_shaping = 2),
                                            (t.noise_shaping_amp = 1),
                                            (t.noise_shaping_stop = 1),
                                            -1 == t.subblock_gain &&
                                                (t.subblock_gain = 1),
                                            (t.use_best_huffman = 1),
                                            (t.full_outer_loop = 0);
                                        break;
                                    case 1:
                                    case 0:
                                        (t.psymodel = 1),
                                            0 == t.noise_shaping &&
                                                (t.noise_shaping = 1),
                                            0 == t.substep_shaping &&
                                                (t.substep_shaping = 2),
                                            (t.noise_shaping_amp = 2),
                                            (t.noise_shaping_stop = 1),
                                            -1 == t.subblock_gain &&
                                                (t.subblock_gain = 1),
                                            (t.use_best_huffman = 1),
                                            (t.full_outer_loop = 0);
                                }
                            })(e),
                            f(e.scale >= 0),
                            e.athaa_type < 0
                                ? (u.ATH.useAdjust = 3)
                                : (u.ATH.useAdjust = e.athaa_type),
                            (u.ATH.aaSensitivityP = Math.pow(
                                10,
                                e.athaa_sensitivity / -10
                            )),
                            null == e.short_blocks &&
                                (e.short_blocks = i.short_block_allowed),
                            e.short_blocks != i.short_block_allowed ||
                                (e.mode != A.JOINT_STEREO &&
                                    e.mode != A.STEREO) ||
                                (e.short_blocks = i.short_block_coupled),
                            e.quant_comp < 0 && (e.quant_comp = 1),
                            e.quant_comp_short < 0 && (e.quant_comp_short = 0),
                            e.msfix < 0 && (e.msfix = 0),
                            (e.exp_nspsytune = 1 | e.exp_nspsytune),
                            e.internal_flags.nsPsy.attackthre < 0 &&
                                (e.internal_flags.nsPsy.attackthre =
                                    c.NSATTACKTHRE),
                            e.internal_flags.nsPsy.attackthre_s < 0 &&
                                (e.internal_flags.nsPsy.attackthre_s =
                                    c.NSATTACKTHRE_S),
                            f(e.scale >= 0),
                            e.scale < 0 && (e.scale = 1),
                            e.ATHtype < 0 && (e.ATHtype = 4),
                            e.ATHcurve < 0 && (e.ATHcurve = 4),
                            e.athaa_loudapprox < 0 && (e.athaa_loudapprox = 2),
                            e.interChRatio < 0 && (e.interChRatio = 0),
                            null == e.useTemporal && (e.useTemporal = !0),
                            (u.slot_lag = u.frac_SpF = 0),
                            e.VBR == r.vbr_off &&
                                (u.slot_lag = u.frac_SpF =
                                    (72e3 * (e.version + 1) * e.brate) %
                                        e.out_samplerate |
                                    0),
                            w.iteration_init(e),
                            T.psymodel_init(e),
                            f(e.scale >= 0),
                            0
                        );
                    }),
                    (this.lame_encode_flush = function (e, t, a, s) {
                        var r,
                            i,
                            o,
                            _,
                            f = e.internal_flags,
                            c = l([2, 1152]),
                            u = 0,
                            h = f.mf_samples_to_encode - g.POSTDELAY,
                            p = N(e);
                        if (f.mf_samples_to_encode < 1) return 0;
                        for (
                            r = 0,
                                e.in_samplerate != e.out_samplerate &&
                                    (h +=
                                        (16 * e.out_samplerate) /
                                        e.in_samplerate),
                                (o = e.framesize - (h % e.framesize)) < 576 &&
                                    (o += e.framesize),
                                e.encoder_padding = o,
                                _ = (h + o) / e.framesize;
                            _ > 0 && u >= 0;

                        ) {
                            var b = p - f.mf_size,
                                m = e.frameNum;
                            (b *= e.in_samplerate),
                                (b /= e.out_samplerate) > 1152 && (b = 1152),
                                b < 1 && (b = 1),
                                (i = s - r),
                                0 == s && (i = 0),
                                (a += u =
                                    this.lame_encode_buffer(
                                        e,
                                        c[0],
                                        c[1],
                                        b,
                                        t,
                                        a,
                                        i
                                    )),
                                (r += u),
                                (_ -= m != e.frameNum ? 1 : 0);
                        }
                        if (((f.mf_samples_to_encode = 0), u < 0)) return u;
                        if (
                            ((i = s - r),
                            0 == s && (i = 0),
                            n.flush_bitstream(e),
                            (u = n.copy_buffer(f, t, a, i, 1)) < 0)
                        )
                            return u;
                        if (
                            ((a += u),
                            (i = s - (r += u)),
                            0 == s && (i = 0),
                            e.write_id3tag_automatic)
                        ) {
                            if (
                                (B.id3tag_write_v1(e),
                                (u = n.copy_buffer(f, t, a, i, 0)) < 0)
                            )
                                return u;
                            r += u;
                        }
                        return r;
                    }),
                    (this.lame_encode_buffer = function (e, a, s, r, i, _, l) {
                        var c = e.internal_flags,
                            u = [null, null];
                        if (4294479419 != c.Class_ID) return -3;
                        if (0 == r) return 0;
                        !(function (e, t) {
                            (null == e.in_buffer_0 ||
                                e.in_buffer_nsamples < t) &&
                                ((e.in_buffer_0 = o(t)),
                                (e.in_buffer_1 = o(t)),
                                (e.in_buffer_nsamples = t));
                        })(c, r),
                            (u[0] = c.in_buffer_0),
                            (u[1] = c.in_buffer_1);
                        for (var p = 0; p < r; p++)
                            (u[0][p] = a[p]),
                                c.channels_in > 1 && (u[1][p] = s[p]);
                        return (function (e, a, s, r, i, o, _) {
                            var l,
                                c,
                                u,
                                p,
                                b,
                                m = e.internal_flags,
                                v = 0,
                                S = [null, null],
                                w = [null, null];
                            if (4294479419 != m.Class_ID) return -3;
                            if (0 == r) return 0;
                            if ((b = n.copy_buffer(m, i, o, _, 0)) < 0)
                                return b;
                            if (
                                ((o += b),
                                (v += b),
                                (w[0] = a),
                                (w[1] = s),
                                d.NEQ(e.scale, 0) && d.NEQ(e.scale, 1))
                            )
                                for (c = 0; c < r; ++c)
                                    (w[0][c] *= e.scale),
                                        2 == m.channels_out &&
                                            (w[1][c] *= e.scale);
                            if (
                                d.NEQ(e.scale_left, 0) &&
                                d.NEQ(e.scale_left, 1)
                            )
                                for (c = 0; c < r; ++c) w[0][c] *= e.scale_left;
                            if (
                                d.NEQ(e.scale_right, 0) &&
                                d.NEQ(e.scale_right, 1)
                            )
                                for (c = 0; c < r; ++c)
                                    w[1][c] *= e.scale_right;
                            if (2 == e.num_channels && 1 == m.channels_out)
                                for (c = 0; c < r; ++c)
                                    (w[0][c] = 0.5 * (w[0][c] + w[1][c])),
                                        (w[1][c] = 0);
                            (p = N(e)),
                                (S[0] = m.mfbuf[0]),
                                (S[1] = m.mfbuf[1]);
                            var M = 0;
                            for (; r > 0; ) {
                                var A,
                                    y,
                                    R = [null, null];
                                (R[0] = w[0]), (R[1] = w[1]);
                                var B = new X();
                                if (
                                    (Y(e, S, R, M, r, B),
                                    (A = B.n_in),
                                    (y = B.n_out),
                                    m.findReplayGain &&
                                        !m.decode_on_the_fly &&
                                        t.AnalyzeSamples(
                                            m.rgdata,
                                            S[0],
                                            m.mf_size,
                                            S[1],
                                            m.mf_size,
                                            y,
                                            m.channels_out
                                        ) == GainAnalysis.GAIN_ANALYSIS_ERROR)
                                )
                                    return -6;
                                if (
                                    ((r -= A),
                                    (M += A),
                                    m.channels_out,
                                    (m.mf_size += y),
                                    f(m.mf_size <= h.MFSIZE),
                                    m.mf_samples_to_encode < 1 &&
                                        (m.mf_samples_to_encode =
                                            g.ENCDELAY + g.POSTDELAY),
                                    (m.mf_samples_to_encode += y),
                                    m.mf_size >= p)
                                ) {
                                    var E = _ - v;
                                    if (
                                        (0 == _ && (E = 0),
                                        (l = D(e, S[0], S[1], i, o, E)) < 0)
                                    )
                                        return l;
                                    for (
                                        o += l,
                                            v += l,
                                            m.mf_size -= e.framesize,
                                            m.mf_samples_to_encode -=
                                                e.framesize,
                                            u = 0;
                                        u < m.channels_out;
                                        u++
                                    )
                                        for (c = 0; c < m.mf_size; c++)
                                            S[u][c] = S[u][c + e.framesize];
                                }
                            }
                            return f(0 == r), v;
                        })(e, u[0], u[1], r, i, _, l);
                    });
            };
        },
        function (e, t, a) {
            var n = a(0),
                s =
                    (n.System,
                    n.VbrMode,
                    n.Float,
                    n.ShortBlock,
                    n.Util,
                    n.Arrays,
                    n.new_array_n,
                    n.new_byte,
                    n.new_double,
                    n.new_float),
                r = (n.new_float_n, n.new_int),
                i = (n.new_int_n, n.assert, a(4));
            e.exports = function () {
                (this.xr = s(576)),
                    (this.l3_enc = r(576)),
                    (this.scalefac = r(i.SFBMAX)),
                    (this.xrpow_max = 0),
                    (this.part2_3_length = 0),
                    (this.big_values = 0),
                    (this.count1 = 0),
                    (this.global_gain = 0),
                    (this.scalefac_compress = 0),
                    (this.block_type = 0),
                    (this.mixed_block_flag = 0),
                    (this.table_select = r(3)),
                    (this.subblock_gain = r(4)),
                    (this.region0_count = 0),
                    (this.region1_count = 0),
                    (this.preflag = 0),
                    (this.scalefac_scale = 0),
                    (this.count1table_select = 0),
                    (this.part2_length = 0),
                    (this.sfb_lmax = 0),
                    (this.sfb_smin = 0),
                    (this.psy_lmax = 0),
                    (this.sfbmax = 0),
                    (this.psymax = 0),
                    (this.sfbdivide = 0),
                    (this.width = r(i.SFBMAX)),
                    (this.window = r(i.SFBMAX)),
                    (this.count1bits = 0),
                    (this.sfb_partition_table = null),
                    (this.slen = r(4)),
                    (this.max_nonzero_coeff = 0);
                var e = this;
                function t(e) {
                    return new Int32Array(e);
                }
                this.assign = function (a) {
                    var n;
                    (e.xr = ((n = a.xr), new Float32Array(n))),
                        (e.l3_enc = t(a.l3_enc)),
                        (e.scalefac = t(a.scalefac)),
                        (e.xrpow_max = a.xrpow_max),
                        (e.part2_3_length = a.part2_3_length),
                        (e.big_values = a.big_values),
                        (e.count1 = a.count1),
                        (e.global_gain = a.global_gain),
                        (e.scalefac_compress = a.scalefac_compress),
                        (e.block_type = a.block_type),
                        (e.mixed_block_flag = a.mixed_block_flag),
                        (e.table_select = t(a.table_select)),
                        (e.subblock_gain = t(a.subblock_gain)),
                        (e.region0_count = a.region0_count),
                        (e.region1_count = a.region1_count),
                        (e.preflag = a.preflag),
                        (e.scalefac_scale = a.scalefac_scale),
                        (e.count1table_select = a.count1table_select),
                        (e.part2_length = a.part2_length),
                        (e.sfb_lmax = a.sfb_lmax),
                        (e.sfb_smin = a.sfb_smin),
                        (e.psy_lmax = a.psy_lmax),
                        (e.sfbmax = a.sfbmax),
                        (e.psymax = a.psymax),
                        (e.sfbdivide = a.sfbdivide),
                        (e.width = t(a.width)),
                        (e.window = t(a.window)),
                        (e.count1bits = a.count1bits),
                        (e.sfb_partition_table =
                            a.sfb_partition_table.slice(0)),
                        (e.slen = t(a.slen)),
                        (e.max_nonzero_coeff = a.max_nonzero_coeff);
                };
            };
        },
        function (e, t, a) {
            var n = a(0),
                s = n.System,
                r = (n.VbrMode, n.Float, n.ShortBlock, n.Util, n.Arrays),
                i = (n.new_array_n, n.new_byte),
                o = (n.new_double, n.new_float, n.new_float_n),
                _ = n.new_int,
                l = (n.new_int_n, n.assert),
                f = a(15),
                c = a(8),
                u = a(1),
                h = a(3);
            function p() {
                var e = a(5),
                    t = this,
                    n = null,
                    p = null,
                    b = null,
                    m = null;
                this.setModules = function (e, t, a, s) {
                    (n = e), (p = t), (b = a), (m = s);
                };
                var d = null,
                    v = 0,
                    g = 0,
                    S = 0;
                function w(e) {
                    s.arraycopy(e.header[e.w_ptr].buf, 0, d, g, e.sideinfo_len),
                        (g += e.sideinfo_len),
                        (v += 8 * e.sideinfo_len),
                        (e.w_ptr = (e.w_ptr + 1) & (h.MAX_HEADER_BUF - 1));
                }
                function M(t, a, n) {
                    for (l(n < 30); n > 0; ) {
                        var s;
                        0 == S &&
                            ((S = 8),
                            g++,
                            l(g < e.LAME_MAXMP3BUFFER),
                            l(t.header[t.w_ptr].write_timing >= v),
                            t.header[t.w_ptr].write_timing == v && w(t),
                            (d[g] = 0)),
                            (s = Math.min(n, S)),
                            (S -= s),
                            l((n -= s) < 32),
                            l(S < 32),
                            (d[g] |= (a >> n) << S),
                            (v += s);
                    }
                }
                function A(t, a, n) {
                    for (l(n < 30); n > 0; ) {
                        var s;
                        0 == S &&
                            ((S = 8),
                            g++,
                            l(g < e.LAME_MAXMP3BUFFER),
                            (d[g] = 0)),
                            (s = Math.min(n, S)),
                            (S -= s),
                            l((n -= s) < 32),
                            l(S < 32),
                            (d[g] |= (a >> n) << S),
                            (v += s);
                    }
                }
                function y(e, t) {
                    var a,
                        n = e.internal_flags;
                    if (
                        (l(t >= 0),
                        t >= 8 && (M(n, 76, 8), (t -= 8)),
                        t >= 8 && (M(n, 65, 8), (t -= 8)),
                        t >= 8 && (M(n, 77, 8), (t -= 8)),
                        t >= 8 && (M(n, 69, 8), (t -= 8)),
                        t >= 32)
                    ) {
                        var s = b.getLameShortVersion();
                        if (t >= 32)
                            for (a = 0; a < s.length && t >= 8; ++a)
                                (t -= 8), M(n, s.charAt(a), 8);
                    }
                    for (; t >= 1; t -= 1)
                        M(n, n.ancillary_flag, 1),
                            (n.ancillary_flag ^= e.disable_reservoir ? 0 : 1);
                    l(0 == t);
                }
                function R(e, t, a) {
                    for (var n = e.header[e.h_ptr].ptr; a > 0; ) {
                        var s = Math.min(a, 8 - (7 & n));
                        l((a -= s) < 32),
                            (e.header[e.h_ptr].buf[n >> 3] |=
                                (t >> a) << (8 - (7 & n) - s)),
                            (n += s);
                    }
                    e.header[e.h_ptr].ptr = n;
                }
                function B(e, t) {
                    e <<= 8;
                    for (var a = 0; a < 8; a++)
                        0 != (65536 & ((t <<= 1) ^ (e <<= 1))) && (t ^= 32773);
                    return t;
                }
                function E(e, t) {
                    var a,
                        n = c.ht[t.count1table_select + 32],
                        s = 0,
                        r = t.big_values,
                        i = t.big_values;
                    for (
                        l(t.count1table_select < 2),
                            a = (t.count1 - t.big_values) / 4;
                        a > 0;
                        --a
                    ) {
                        var o,
                            _ = 0,
                            f = 0;
                        0 != (o = t.l3_enc[r + 0]) &&
                            ((f += 8), t.xr[i + 0] < 0 && _++, l(o <= 1)),
                            0 != (o = t.l3_enc[r + 1]) &&
                                ((f += 4),
                                (_ *= 2),
                                t.xr[i + 1] < 0 && _++,
                                l(o <= 1)),
                            0 != (o = t.l3_enc[r + 2]) &&
                                ((f += 2),
                                (_ *= 2),
                                t.xr[i + 2] < 0 && _++,
                                l(o <= 1)),
                            0 != (o = t.l3_enc[r + 3]) &&
                                (f++,
                                (_ *= 2),
                                t.xr[i + 3] < 0 && _++,
                                l(o <= 1)),
                            (r += 4),
                            (i += 4),
                            M(e, _ + n.table[f], n.hlen[f]),
                            (s += n.hlen[f]);
                    }
                    return s;
                }
                function T(e, t, a, n, s) {
                    var r = c.ht[t],
                        i = 0;
                    if ((l(t < 32), 0 == t)) return i;
                    for (var o = a; o < n; o += 2) {
                        var _ = 0,
                            f = 0,
                            u = r.xlen,
                            h = r.xlen,
                            p = 0,
                            b = s.l3_enc[o],
                            m = s.l3_enc[o + 1];
                        if ((0 != b && (s.xr[o] < 0 && p++, _--), t > 15)) {
                            if (b > 14) {
                                var d = b - 15;
                                l(d <= r.linmax),
                                    (p |= d << 1),
                                    (f = u),
                                    (b = 15);
                            }
                            if (m > 14) {
                                var v = m - 15;
                                l(v <= r.linmax),
                                    (p <<= u),
                                    (p |= v),
                                    (f += u),
                                    (m = 15);
                            }
                            h = 16;
                        }
                        0 != m && ((p <<= 1), s.xr[o + 1] < 0 && p++, _--),
                            l((b | m) < 16),
                            (b = b * h + m),
                            (f -= _),
                            (_ += r.hlen[b]),
                            l(_ <= 32),
                            l(f <= 32),
                            M(e, r.table[b], _),
                            M(e, p, f),
                            (i += _ + f);
                    }
                    return i;
                }
                function x(e, t) {
                    var a = 3 * e.scalefac_band.s[3];
                    a > t.big_values && (a = t.big_values);
                    var n = T(e, t.table_select[0], 0, a, t);
                    return (n += T(e, t.table_select[1], a, t.big_values, t));
                }
                function k(e, t) {
                    var a, n, s, r;
                    (a = t.big_values), l(0 <= a && a <= 576);
                    var i = t.region0_count + 1;
                    return (
                        l(0 <= i),
                        l(i < e.scalefac_band.l.length),
                        (s = e.scalefac_band.l[i]),
                        (i += t.region1_count + 1),
                        l(0 <= i),
                        l(i < e.scalefac_band.l.length),
                        s > a && (s = a),
                        (r = e.scalefac_band.l[i]) > a && (r = a),
                        (n = T(e, t.table_select[0], 0, s, t)),
                        (n += T(e, t.table_select[1], s, r, t)),
                        (n += T(e, t.table_select[2], r, a, t))
                    );
                }
                function P() {
                    this.total = 0;
                }
                function I(e, a) {
                    var n,
                        r,
                        i,
                        o,
                        _,
                        l = e.internal_flags;
                    return (
                        (_ = l.w_ptr),
                        -1 == (o = l.h_ptr - 1) && (o = h.MAX_HEADER_BUF - 1),
                        (n = l.header[o].write_timing - v),
                        (a.total = n),
                        n >= 0 &&
                            ((r = 1 + o - _),
                            o < _ && (r = 1 + o - _ + h.MAX_HEADER_BUF),
                            (n -= 8 * r * l.sideinfo_len)),
                        (n += i = t.getframebits(e)),
                        (a.total += i),
                        a.total % 8 != 0
                            ? (a.total = 1 + a.total / 8)
                            : (a.total = a.total / 8),
                        (a.total += g + 1),
                        n < 0 &&
                            s.err.println(
                                "strange error flushing buffer ... \n"
                            ),
                        n
                    );
                }
                (this.getframebits = function (e) {
                    var t,
                        a = e.internal_flags;
                    return (
                        (t =
                            0 != a.bitrate_index
                                ? c.bitrate_table[e.version][a.bitrate_index]
                                : e.brate),
                        l(8 <= t && t <= 640),
                        8 *
                            (0 |
                                ((72e3 * (e.version + 1) * t) /
                                    e.out_samplerate +
                                    a.padding))
                    );
                }),
                    (this.CRC_writeheader = function (e, t) {
                        var a = 65535;
                        (a = B(255 & t[2], a)), (a = B(255 & t[3], a));
                        for (var n = 6; n < e.sideinfo_len; n++)
                            a = B(255 & t[n], a);
                        (t[4] = byte(a >> 8)), (t[5] = byte(255 & a));
                    }),
                    (this.flush_bitstream = function (e) {
                        var t,
                            a,
                            s = e.internal_flags,
                            r = s.h_ptr - 1;
                        if (
                            (-1 == r && (r = h.MAX_HEADER_BUF - 1),
                            (t = s.l3_side),
                            !((a = I(e, new P())) < 0))
                        ) {
                            if (
                                (y(e, a),
                                l(
                                    s.header[r].write_timing +
                                        this.getframebits(e) ==
                                        v
                                ),
                                (s.ResvSize = 0),
                                (t.main_data_begin = 0),
                                s.findReplayGain)
                            ) {
                                var i = n.GetTitleGain(s.rgdata);
                                l(NEQ(i, GainAnalysis.GAIN_NOT_ENOUGH_SAMPLES)),
                                    (s.RadioGain =
                                        0 | Math.floor(10 * i + 0.5));
                            }
                            s.findPeakSample &&
                                ((s.noclipGainChange =
                                    0 |
                                    Math.ceil(
                                        20 *
                                            Math.log10(s.PeakSample / 32767) *
                                            10
                                    )),
                                s.noclipGainChange > 0 &&
                                (EQ(e.scale, 1) || EQ(e.scale, 0))
                                    ? (s.noclipScale =
                                          Math.floor(
                                              (32767 / s.PeakSample) * 100
                                          ) / 100)
                                    : (s.noclipScale = -1));
                        }
                    }),
                    (this.add_dummy_byte = function (e, t, a) {
                        for (var n, s = e.internal_flags; a-- > 0; )
                            for (A(0, t, 8), n = 0; n < h.MAX_HEADER_BUF; ++n)
                                s.header[n].write_timing += 8;
                    }),
                    (this.format_bitstream = function (e) {
                        var t,
                            a = e.internal_flags;
                        t = a.l3_side;
                        var n = this.getframebits(e);
                        y(e, t.resvDrain_pre),
                            (function (e, t) {
                                var a,
                                    n,
                                    i,
                                    o = e.internal_flags;
                                if (
                                    ((a = o.l3_side),
                                    (o.header[o.h_ptr].ptr = 0),
                                    r.fill(
                                        o.header[o.h_ptr].buf,
                                        0,
                                        o.sideinfo_len,
                                        0
                                    ),
                                    e.out_samplerate < 16e3
                                        ? R(o, 4094, 12)
                                        : R(o, 4095, 12),
                                    R(o, e.version, 1),
                                    R(o, 1, 2),
                                    R(o, e.error_protection ? 0 : 1, 1),
                                    R(o, o.bitrate_index, 4),
                                    R(o, o.samplerate_index, 2),
                                    R(o, o.padding, 1),
                                    R(o, e.extension, 1),
                                    R(o, e.mode.ordinal(), 2),
                                    R(o, o.mode_ext, 2),
                                    R(o, e.copyright, 1),
                                    R(o, e.original, 1),
                                    R(o, e.emphasis, 2),
                                    e.error_protection && R(o, 0, 16),
                                    1 == e.version)
                                ) {
                                    for (
                                        l(a.main_data_begin >= 0),
                                            R(o, a.main_data_begin, 9),
                                            2 == o.channels_out
                                                ? R(o, a.private_bits, 3)
                                                : R(o, a.private_bits, 5),
                                            i = 0;
                                        i < o.channels_out;
                                        i++
                                    ) {
                                        var _;
                                        for (_ = 0; _ < 4; _++)
                                            R(o, a.scfsi[i][_], 1);
                                    }
                                    for (n = 0; n < 2; n++)
                                        for (i = 0; i < o.channels_out; i++) {
                                            R(
                                                o,
                                                (f = a.tt[n][i])
                                                    .part2_3_length +
                                                    f.part2_length,
                                                12
                                            ),
                                                R(o, f.big_values / 2, 9),
                                                R(o, f.global_gain, 8),
                                                R(o, f.scalefac_compress, 4),
                                                f.block_type != u.NORM_TYPE
                                                    ? (R(o, 1, 1),
                                                      R(o, f.block_type, 2),
                                                      R(
                                                          o,
                                                          f.mixed_block_flag,
                                                          1
                                                      ),
                                                      14 == f.table_select[0] &&
                                                          (f.table_select[0] = 16),
                                                      R(
                                                          o,
                                                          f.table_select[0],
                                                          5
                                                      ),
                                                      14 == f.table_select[1] &&
                                                          (f.table_select[1] = 16),
                                                      R(
                                                          o,
                                                          f.table_select[1],
                                                          5
                                                      ),
                                                      R(
                                                          o,
                                                          f.subblock_gain[0],
                                                          3
                                                      ),
                                                      R(
                                                          o,
                                                          f.subblock_gain[1],
                                                          3
                                                      ),
                                                      R(
                                                          o,
                                                          f.subblock_gain[2],
                                                          3
                                                      ))
                                                    : (R(o, 0, 1),
                                                      14 == f.table_select[0] &&
                                                          (f.table_select[0] = 16),
                                                      R(
                                                          o,
                                                          f.table_select[0],
                                                          5
                                                      ),
                                                      14 == f.table_select[1] &&
                                                          (f.table_select[1] = 16),
                                                      R(
                                                          o,
                                                          f.table_select[1],
                                                          5
                                                      ),
                                                      14 == f.table_select[2] &&
                                                          (f.table_select[2] = 16),
                                                      R(
                                                          o,
                                                          f.table_select[2],
                                                          5
                                                      ),
                                                      l(
                                                          0 <=
                                                              f.region0_count &&
                                                              f.region0_count <
                                                                  16
                                                      ),
                                                      l(
                                                          0 <=
                                                              f.region1_count &&
                                                              f.region1_count <
                                                                  8
                                                      ),
                                                      R(o, f.region0_count, 4),
                                                      R(o, f.region1_count, 3)),
                                                R(o, f.preflag, 1),
                                                R(o, f.scalefac_scale, 1),
                                                R(o, f.count1table_select, 1);
                                        }
                                } else
                                    for (
                                        l(a.main_data_begin >= 0),
                                            R(o, a.main_data_begin, 8),
                                            R(
                                                o,
                                                a.private_bits,
                                                o.channels_out
                                            ),
                                            n = 0,
                                            i = 0;
                                        i < o.channels_out;
                                        i++
                                    ) {
                                        var f;
                                        R(
                                            o,
                                            (f = a.tt[n][i]).part2_3_length +
                                                f.part2_length,
                                            12
                                        ),
                                            R(o, f.big_values / 2, 9),
                                            R(o, f.global_gain, 8),
                                            R(o, f.scalefac_compress, 9),
                                            f.block_type != u.NORM_TYPE
                                                ? (R(o, 1, 1),
                                                  R(o, f.block_type, 2),
                                                  R(o, f.mixed_block_flag, 1),
                                                  14 == f.table_select[0] &&
                                                      (f.table_select[0] = 16),
                                                  R(o, f.table_select[0], 5),
                                                  14 == f.table_select[1] &&
                                                      (f.table_select[1] = 16),
                                                  R(o, f.table_select[1], 5),
                                                  R(o, f.subblock_gain[0], 3),
                                                  R(o, f.subblock_gain[1], 3),
                                                  R(o, f.subblock_gain[2], 3))
                                                : (R(o, 0, 1),
                                                  14 == f.table_select[0] &&
                                                      (f.table_select[0] = 16),
                                                  R(o, f.table_select[0], 5),
                                                  14 == f.table_select[1] &&
                                                      (f.table_select[1] = 16),
                                                  R(o, f.table_select[1], 5),
                                                  14 == f.table_select[2] &&
                                                      (f.table_select[2] = 16),
                                                  R(o, f.table_select[2], 5),
                                                  l(
                                                      0 <= f.region0_count &&
                                                          f.region0_count < 16
                                                  ),
                                                  l(
                                                      0 <= f.region1_count &&
                                                          f.region1_count < 8
                                                  ),
                                                  R(o, f.region0_count, 4),
                                                  R(o, f.region1_count, 3)),
                                            R(o, f.scalefac_scale, 1),
                                            R(o, f.count1table_select, 1);
                                    }
                                e.error_protection &&
                                    CRC_writeheader(o, o.header[o.h_ptr].buf);
                                var c = o.h_ptr;
                                l(o.header[c].ptr == 8 * o.sideinfo_len),
                                    (o.h_ptr =
                                        (c + 1) & (h.MAX_HEADER_BUF - 1)),
                                    (o.header[o.h_ptr].write_timing =
                                        o.header[c].write_timing + t),
                                    o.h_ptr == o.w_ptr &&
                                        s.err.println(
                                            "Error: MAX_HEADER_BUF too small in bitstream.c \n"
                                        );
                            })(e, n);
                        var i = 8 * a.sideinfo_len;
                        if (
                            ((i += (function (e) {
                                var t,
                                    a,
                                    n,
                                    s,
                                    r = 0,
                                    i = e.internal_flags,
                                    o = i.l3_side;
                                if (1 == e.version)
                                    for (t = 0; t < 2; t++)
                                        for (a = 0; a < i.channels_out; a++) {
                                            var _ = o.tt[t][a],
                                                c =
                                                    f.slen1_tab[
                                                        _.scalefac_compress
                                                    ],
                                                h =
                                                    f.slen2_tab[
                                                        _.scalefac_compress
                                                    ];
                                            for (
                                                s = 0, n = 0;
                                                n < _.sfbdivide;
                                                n++
                                            )
                                                -1 != _.scalefac[n] &&
                                                    (M(i, _.scalefac[n], c),
                                                    (s += c));
                                            for (; n < _.sfbmax; n++)
                                                -1 != _.scalefac[n] &&
                                                    (M(i, _.scalefac[n], h),
                                                    (s += h));
                                            l(s == _.part2_length),
                                                _.block_type == u.SHORT_TYPE
                                                    ? (s += x(i, _))
                                                    : (s += k(i, _)),
                                                (s += E(i, _)),
                                                l(
                                                    s ==
                                                        _.part2_3_length +
                                                            _.part2_length
                                                ),
                                                (r += s);
                                        }
                                else
                                    for (
                                        t = 0, a = 0;
                                        a < i.channels_out;
                                        a++
                                    ) {
                                        _ = o.tt[t][a];
                                        var p,
                                            b,
                                            m = 0;
                                        if (
                                            (l(null != _.sfb_partition_table),
                                            (s = 0),
                                            (n = 0),
                                            (b = 0),
                                            _.block_type == u.SHORT_TYPE)
                                        ) {
                                            for (; b < 4; b++) {
                                                var d =
                                                        _.sfb_partition_table[
                                                            b
                                                        ] / 3,
                                                    v = _.slen[b];
                                                for (p = 0; p < d; p++, n++)
                                                    M(
                                                        i,
                                                        Math.max(
                                                            _.scalefac[
                                                                3 * n + 0
                                                            ],
                                                            0
                                                        ),
                                                        v
                                                    ),
                                                        M(
                                                            i,
                                                            Math.max(
                                                                _.scalefac[
                                                                    3 * n + 1
                                                                ],
                                                                0
                                                            ),
                                                            v
                                                        ),
                                                        M(
                                                            i,
                                                            Math.max(
                                                                _.scalefac[
                                                                    3 * n + 2
                                                                ],
                                                                0
                                                            ),
                                                            v
                                                        ),
                                                        (m += 3 * v);
                                            }
                                            s += x(i, _);
                                        } else {
                                            for (; b < 4; b++) {
                                                (d = _.sfb_partition_table[b]),
                                                    (v = _.slen[b]);
                                                for (p = 0; p < d; p++, n++)
                                                    M(
                                                        i,
                                                        Math.max(
                                                            _.scalefac[n],
                                                            0
                                                        ),
                                                        v
                                                    ),
                                                        (m += v);
                                            }
                                            s += k(i, _);
                                        }
                                        (s += E(i, _)),
                                            l(s == _.part2_3_length),
                                            l(m == _.part2_length),
                                            (r += m + s);
                                    }
                                return r;
                            })(e)),
                            y(e, t.resvDrain_post),
                            (i += t.resvDrain_post),
                            (t.main_data_begin += (n - i) / 8),
                            I(e, new P()) != a.ResvSize &&
                                s.err.println(
                                    "Internal buffer inconsistency. flushbits <> ResvSize"
                                ),
                            8 * t.main_data_begin != a.ResvSize &&
                                (s.err.printf(
                                    "bit reservoir error: \nl3_side.main_data_begin: %d \nResvoir size:             %d \nresv drain (post)         %d \nresv drain (pre)          %d \nheader and sideinfo:      %d \ndata bits:                %d \ntotal bits:               %d (remainder: %d) \nbitsperframe:             %d \n",
                                    8 * t.main_data_begin,
                                    a.ResvSize,
                                    t.resvDrain_post,
                                    t.resvDrain_pre,
                                    8 * a.sideinfo_len,
                                    i - t.resvDrain_post - 8 * a.sideinfo_len,
                                    i,
                                    i % 8,
                                    n
                                ),
                                s.err.println(
                                    "This is a fatal error.  It has several possible causes:"
                                ),
                                s.err.println(
                                    "90%%  LAME compiled with buggy version of gcc using advanced optimizations"
                                ),
                                s.err.println(
                                    " 9%%  Your system is overclocked"
                                ),
                                s.err.println(
                                    " 1%%  bug in LAME encoding library"
                                ),
                                (a.ResvSize = 8 * t.main_data_begin)),
                            l(v % 8 == 0),
                            v > 1e9)
                        ) {
                            var o;
                            for (o = 0; o < h.MAX_HEADER_BUF; ++o)
                                a.header[o].write_timing -= v;
                            v = 0;
                        }
                        return 0;
                    }),
                    (this.copy_buffer = function (e, t, a, r, i) {
                        var f = g + 1;
                        if (f <= 0) return 0;
                        if (0 != r && f > r) return -1;
                        if (
                            (s.arraycopy(d, 0, t, a, f),
                            (g = -1),
                            (S = 0),
                            0 != i)
                        ) {
                            var c = _(1);
                            if (
                                ((c[0] = e.nMusicCRC),
                                m.updateMusicCRC(c, t, a, f),
                                (e.nMusicCRC = c[0]),
                                f > 0 && (e.VBR_seek_table.nBytesWritten += f),
                                e.decode_on_the_fly)
                            )
                                for (
                                    var u, h = o([2, 1152]), b = f, v = -1;
                                    0 != v;

                                )
                                    if (
                                        ((v = p.hip_decode1_unclipped(
                                            e.hip,
                                            t,
                                            a,
                                            b,
                                            h[0],
                                            h[1]
                                        )),
                                        (b = 0),
                                        -1 == v && (v = 0),
                                        v > 0)
                                    ) {
                                        if ((l(v <= 1152), e.findPeakSample)) {
                                            for (u = 0; u < v; u++)
                                                h[0][u] > e.PeakSample
                                                    ? (e.PeakSample = h[0][u])
                                                    : -h[0][u] > e.PeakSample &&
                                                      (e.PeakSample = -h[0][u]);
                                            if (e.channels_out > 1)
                                                for (u = 0; u < v; u++)
                                                    h[1][u] > e.PeakSample
                                                        ? (e.PeakSample =
                                                              h[1][u])
                                                        : -h[1][u] >
                                                              e.PeakSample &&
                                                          (e.PeakSample =
                                                              -h[1][u]);
                                        }
                                        if (
                                            e.findReplayGain &&
                                            n.AnalyzeSamples(
                                                e.rgdata,
                                                h[0],
                                                0,
                                                h[1],
                                                0,
                                                v,
                                                e.channels_out
                                            ) ==
                                                GainAnalysis.GAIN_ANALYSIS_ERROR
                                        )
                                            return -6;
                                    }
                        }
                        return f;
                    }),
                    (this.init_bit_stream_w = function (t) {
                        (d = i(e.LAME_MAXMP3BUFFER)),
                            (t.h_ptr = t.w_ptr = 0),
                            (t.header[t.h_ptr].write_timing = 0),
                            (g = -1),
                            (S = 0),
                            (v = 0);
                    });
            }
            (p.EQ = function (e, t) {
                return Math.abs(e) > Math.abs(t)
                    ? Math.abs(e - t) <= 1e-6 * Math.abs(e)
                    : Math.abs(e - t) <= 1e-6 * Math.abs(t);
            }),
                (p.NEQ = function (e, t) {
                    return !p.EQ(e, t);
                }),
                (e.exports = p);
        },
        function (e, t) {
            function a(e, t, a, n) {
                (this.xlen = e),
                    (this.linmax = t),
                    (this.table = a),
                    (this.hlen = n);
            }
            var n = {
                t1HB: [1, 1, 1, 0],
                t2HB: [1, 2, 1, 3, 1, 1, 3, 2, 0],
                t3HB: [3, 2, 1, 1, 1, 1, 3, 2, 0],
                t5HB: [1, 2, 6, 5, 3, 1, 4, 4, 7, 5, 7, 1, 6, 1, 1, 0],
                t6HB: [7, 3, 5, 1, 6, 2, 3, 2, 5, 4, 4, 1, 3, 3, 2, 0],
                t7HB: [
                    1, 2, 10, 19, 16, 10, 3, 3, 7, 10, 5, 3, 11, 4, 13, 17, 8,
                    4, 12, 11, 18, 15, 11, 2, 7, 6, 9, 14, 3, 1, 6, 4, 5, 3, 2,
                    0,
                ],
                t8HB: [
                    3, 4, 6, 18, 12, 5, 5, 1, 2, 16, 9, 3, 7, 3, 5, 14, 7, 3,
                    19, 17, 15, 13, 10, 4, 13, 5, 8, 11, 5, 1, 12, 4, 4, 1, 1,
                    0,
                ],
                t9HB: [
                    7, 5, 9, 14, 15, 7, 6, 4, 5, 5, 6, 7, 7, 6, 8, 8, 8, 5, 15,
                    6, 9, 10, 5, 1, 11, 7, 9, 6, 4, 1, 14, 4, 6, 2, 6, 0,
                ],
                t10HB: [
                    1, 2, 10, 23, 35, 30, 12, 17, 3, 3, 8, 12, 18, 21, 12, 7,
                    11, 9, 15, 21, 32, 40, 19, 6, 14, 13, 22, 34, 46, 23, 18, 7,
                    20, 19, 33, 47, 27, 22, 9, 3, 31, 22, 41, 26, 21, 20, 5, 3,
                    14, 13, 10, 11, 16, 6, 5, 1, 9, 8, 7, 8, 4, 4, 2, 0,
                ],
                t11HB: [
                    3, 4, 10, 24, 34, 33, 21, 15, 5, 3, 4, 10, 32, 17, 11, 10,
                    11, 7, 13, 18, 30, 31, 20, 5, 25, 11, 19, 59, 27, 18, 12, 5,
                    35, 33, 31, 58, 30, 16, 7, 5, 28, 26, 32, 19, 17, 15, 8, 14,
                    14, 12, 9, 13, 14, 9, 4, 1, 11, 4, 6, 6, 6, 3, 2, 0,
                ],
                t12HB: [
                    9, 6, 16, 33, 41, 39, 38, 26, 7, 5, 6, 9, 23, 16, 26, 11,
                    17, 7, 11, 14, 21, 30, 10, 7, 17, 10, 15, 12, 18, 28, 14, 5,
                    32, 13, 22, 19, 18, 16, 9, 5, 40, 17, 31, 29, 17, 13, 4, 2,
                    27, 12, 11, 15, 10, 7, 4, 1, 27, 12, 8, 12, 6, 3, 1, 0,
                ],
                t13HB: [
                    1, 5, 14, 21, 34, 51, 46, 71, 42, 52, 68, 52, 67, 44, 43,
                    19, 3, 4, 12, 19, 31, 26, 44, 33, 31, 24, 32, 24, 31, 35,
                    22, 14, 15, 13, 23, 36, 59, 49, 77, 65, 29, 40, 30, 40, 27,
                    33, 42, 16, 22, 20, 37, 61, 56, 79, 73, 64, 43, 76, 56, 37,
                    26, 31, 25, 14, 35, 16, 60, 57, 97, 75, 114, 91, 54, 73, 55,
                    41, 48, 53, 23, 24, 58, 27, 50, 96, 76, 70, 93, 84, 77, 58,
                    79, 29, 74, 49, 41, 17, 47, 45, 78, 74, 115, 94, 90, 79, 69,
                    83, 71, 50, 59, 38, 36, 15, 72, 34, 56, 95, 92, 85, 91, 90,
                    86, 73, 77, 65, 51, 44, 43, 42, 43, 20, 30, 44, 55, 78, 72,
                    87, 78, 61, 46, 54, 37, 30, 20, 16, 53, 25, 41, 37, 44, 59,
                    54, 81, 66, 76, 57, 54, 37, 18, 39, 11, 35, 33, 31, 57, 42,
                    82, 72, 80, 47, 58, 55, 21, 22, 26, 38, 22, 53, 25, 23, 38,
                    70, 60, 51, 36, 55, 26, 34, 23, 27, 14, 9, 7, 34, 32, 28,
                    39, 49, 75, 30, 52, 48, 40, 52, 28, 18, 17, 9, 5, 45, 21,
                    34, 64, 56, 50, 49, 45, 31, 19, 12, 15, 10, 7, 6, 3, 48, 23,
                    20, 39, 36, 35, 53, 21, 16, 23, 13, 10, 6, 1, 4, 2, 16, 15,
                    17, 27, 25, 20, 29, 11, 17, 12, 16, 8, 1, 1, 0, 1,
                ],
                t15HB: [
                    7, 12, 18, 53, 47, 76, 124, 108, 89, 123, 108, 119, 107, 81,
                    122, 63, 13, 5, 16, 27, 46, 36, 61, 51, 42, 70, 52, 83, 65,
                    41, 59, 36, 19, 17, 15, 24, 41, 34, 59, 48, 40, 64, 50, 78,
                    62, 80, 56, 33, 29, 28, 25, 43, 39, 63, 55, 93, 76, 59, 93,
                    72, 54, 75, 50, 29, 52, 22, 42, 40, 67, 57, 95, 79, 72, 57,
                    89, 69, 49, 66, 46, 27, 77, 37, 35, 66, 58, 52, 91, 74, 62,
                    48, 79, 63, 90, 62, 40, 38, 125, 32, 60, 56, 50, 92, 78, 65,
                    55, 87, 71, 51, 73, 51, 70, 30, 109, 53, 49, 94, 88, 75, 66,
                    122, 91, 73, 56, 42, 64, 44, 21, 25, 90, 43, 41, 77, 73, 63,
                    56, 92, 77, 66, 47, 67, 48, 53, 36, 20, 71, 34, 67, 60, 58,
                    49, 88, 76, 67, 106, 71, 54, 38, 39, 23, 15, 109, 53, 51,
                    47, 90, 82, 58, 57, 48, 72, 57, 41, 23, 27, 62, 9, 86, 42,
                    40, 37, 70, 64, 52, 43, 70, 55, 42, 25, 29, 18, 11, 11, 118,
                    68, 30, 55, 50, 46, 74, 65, 49, 39, 24, 16, 22, 13, 14, 7,
                    91, 44, 39, 38, 34, 63, 52, 45, 31, 52, 28, 19, 14, 8, 9, 3,
                    123, 60, 58, 53, 47, 43, 32, 22, 37, 24, 17, 12, 15, 10, 2,
                    1, 71, 37, 34, 30, 28, 20, 17, 26, 21, 16, 10, 6, 8, 6, 2,
                    0,
                ],
                t16HB: [
                    1, 5, 14, 44, 74, 63, 110, 93, 172, 149, 138, 242, 225, 195,
                    376, 17, 3, 4, 12, 20, 35, 62, 53, 47, 83, 75, 68, 119, 201,
                    107, 207, 9, 15, 13, 23, 38, 67, 58, 103, 90, 161, 72, 127,
                    117, 110, 209, 206, 16, 45, 21, 39, 69, 64, 114, 99, 87,
                    158, 140, 252, 212, 199, 387, 365, 26, 75, 36, 68, 65, 115,
                    101, 179, 164, 155, 264, 246, 226, 395, 382, 362, 9, 66, 30,
                    59, 56, 102, 185, 173, 265, 142, 253, 232, 400, 388, 378,
                    445, 16, 111, 54, 52, 100, 184, 178, 160, 133, 257, 244,
                    228, 217, 385, 366, 715, 10, 98, 48, 91, 88, 165, 157, 148,
                    261, 248, 407, 397, 372, 380, 889, 884, 8, 85, 84, 81, 159,
                    156, 143, 260, 249, 427, 401, 392, 383, 727, 713, 708, 7,
                    154, 76, 73, 141, 131, 256, 245, 426, 406, 394, 384, 735,
                    359, 710, 352, 11, 139, 129, 67, 125, 247, 233, 229, 219,
                    393, 743, 737, 720, 885, 882, 439, 4, 243, 120, 118, 115,
                    227, 223, 396, 746, 742, 736, 721, 712, 706, 223, 436, 6,
                    202, 224, 222, 218, 216, 389, 386, 381, 364, 888, 443, 707,
                    440, 437, 1728, 4, 747, 211, 210, 208, 370, 379, 734, 723,
                    714, 1735, 883, 877, 876, 3459, 865, 2, 377, 369, 102, 187,
                    726, 722, 358, 711, 709, 866, 1734, 871, 3458, 870, 434, 0,
                    12, 10, 7, 11, 10, 17, 11, 9, 13, 12, 10, 7, 5, 3, 1, 3,
                ],
                t24HB: [
                    15, 13, 46, 80, 146, 262, 248, 434, 426, 669, 653, 649, 621,
                    517, 1032, 88, 14, 12, 21, 38, 71, 130, 122, 216, 209, 198,
                    327, 345, 319, 297, 279, 42, 47, 22, 41, 74, 68, 128, 120,
                    221, 207, 194, 182, 340, 315, 295, 541, 18, 81, 39, 75, 70,
                    134, 125, 116, 220, 204, 190, 178, 325, 311, 293, 271, 16,
                    147, 72, 69, 135, 127, 118, 112, 210, 200, 188, 352, 323,
                    306, 285, 540, 14, 263, 66, 129, 126, 119, 114, 214, 202,
                    192, 180, 341, 317, 301, 281, 262, 12, 249, 123, 121, 117,
                    113, 215, 206, 195, 185, 347, 330, 308, 291, 272, 520, 10,
                    435, 115, 111, 109, 211, 203, 196, 187, 353, 332, 313, 298,
                    283, 531, 381, 17, 427, 212, 208, 205, 201, 193, 186, 177,
                    169, 320, 303, 286, 268, 514, 377, 16, 335, 199, 197, 191,
                    189, 181, 174, 333, 321, 305, 289, 275, 521, 379, 371, 11,
                    668, 184, 183, 179, 175, 344, 331, 314, 304, 290, 277, 530,
                    383, 373, 366, 10, 652, 346, 171, 168, 164, 318, 309, 299,
                    287, 276, 263, 513, 375, 368, 362, 6, 648, 322, 316, 312,
                    307, 302, 292, 284, 269, 261, 512, 376, 370, 364, 359, 4,
                    620, 300, 296, 294, 288, 282, 273, 266, 515, 380, 374, 369,
                    365, 361, 357, 2, 1033, 280, 278, 274, 267, 264, 259, 382,
                    378, 372, 367, 363, 360, 358, 356, 0, 43, 20, 19, 17, 15,
                    13, 11, 9, 7, 6, 4, 7, 5, 3, 1, 3,
                ],
                t32HB: [
                    1, 10, 8, 20, 12, 20, 16, 32, 14, 12, 24, 0, 28, 16, 24, 16,
                ],
                t33HB: [
                    15, 28, 26, 48, 22, 40, 36, 64, 14, 24, 20, 32, 12, 16, 8,
                    0,
                ],
                t1l: [1, 4, 3, 5],
                t2l: [1, 4, 7, 4, 5, 7, 6, 7, 8],
                t3l: [2, 3, 7, 4, 4, 7, 6, 7, 8],
                t5l: [1, 4, 7, 8, 4, 5, 8, 9, 7, 8, 9, 10, 8, 8, 9, 10],
                t6l: [3, 4, 6, 8, 4, 4, 6, 7, 5, 6, 7, 8, 7, 7, 8, 9],
                t7l: [
                    1, 4, 7, 9, 9, 10, 4, 6, 8, 9, 9, 10, 7, 7, 9, 10, 10, 11,
                    8, 9, 10, 11, 11, 11, 8, 9, 10, 11, 11, 12, 9, 10, 11, 12,
                    12, 12,
                ],
                t8l: [
                    2, 4, 7, 9, 9, 10, 4, 4, 6, 10, 10, 10, 7, 6, 8, 10, 10, 11,
                    9, 10, 10, 11, 11, 12, 9, 9, 10, 11, 12, 12, 10, 10, 11, 11,
                    13, 13,
                ],
                t9l: [
                    3, 4, 6, 7, 9, 10, 4, 5, 6, 7, 8, 10, 5, 6, 7, 8, 9, 10, 7,
                    7, 8, 9, 9, 10, 8, 8, 9, 9, 10, 11, 9, 9, 10, 10, 11, 11,
                ],
                t10l: [
                    1, 4, 7, 9, 10, 10, 10, 11, 4, 6, 8, 9, 10, 11, 10, 10, 7,
                    8, 9, 10, 11, 12, 11, 11, 8, 9, 10, 11, 12, 12, 11, 12, 9,
                    10, 11, 12, 12, 12, 12, 12, 10, 11, 12, 12, 13, 13, 12, 13,
                    9, 10, 11, 12, 12, 12, 13, 13, 10, 10, 11, 12, 12, 13, 13,
                    13,
                ],
                t11l: [
                    2, 4, 6, 8, 9, 10, 9, 10, 4, 5, 6, 8, 10, 10, 9, 10, 6, 7,
                    8, 9, 10, 11, 10, 10, 8, 8, 9, 11, 10, 12, 10, 11, 9, 10,
                    10, 11, 11, 12, 11, 12, 9, 10, 11, 12, 12, 13, 12, 13, 9, 9,
                    9, 10, 11, 12, 12, 12, 9, 9, 10, 11, 12, 12, 12, 12,
                ],
                t12l: [
                    4, 4, 6, 8, 9, 10, 10, 10, 4, 5, 6, 7, 9, 9, 10, 10, 6, 6,
                    7, 8, 9, 10, 9, 10, 7, 7, 8, 8, 9, 10, 10, 10, 8, 8, 9, 9,
                    10, 10, 10, 11, 9, 9, 10, 10, 10, 11, 10, 11, 9, 9, 9, 10,
                    10, 11, 11, 12, 10, 10, 10, 11, 11, 11, 11, 12,
                ],
                t13l: [
                    1, 5, 7, 8, 9, 10, 10, 11, 10, 11, 12, 12, 13, 13, 14, 14,
                    4, 6, 8, 9, 10, 10, 11, 11, 11, 11, 12, 12, 13, 14, 14, 14,
                    7, 8, 9, 10, 11, 11, 12, 12, 11, 12, 12, 13, 13, 14, 15, 15,
                    8, 9, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 15,
                    15, 9, 9, 11, 11, 12, 12, 13, 13, 12, 13, 13, 14, 14, 15,
                    15, 16, 10, 10, 11, 12, 12, 12, 13, 13, 13, 13, 14, 13, 15,
                    15, 16, 16, 10, 11, 12, 12, 13, 13, 13, 13, 13, 14, 14, 14,
                    15, 15, 16, 16, 11, 11, 12, 13, 13, 13, 14, 14, 14, 14, 15,
                    15, 15, 16, 18, 18, 10, 10, 11, 12, 12, 13, 13, 14, 14, 14,
                    14, 15, 15, 16, 17, 17, 11, 11, 12, 12, 13, 13, 13, 15, 14,
                    15, 15, 16, 16, 16, 18, 17, 11, 12, 12, 13, 13, 14, 14, 15,
                    14, 15, 16, 15, 16, 17, 18, 19, 12, 12, 12, 13, 14, 14, 14,
                    14, 15, 15, 15, 16, 17, 17, 17, 18, 12, 13, 13, 14, 14, 15,
                    14, 15, 16, 16, 17, 17, 17, 18, 18, 18, 13, 13, 14, 15, 15,
                    15, 16, 16, 16, 16, 16, 17, 18, 17, 18, 18, 14, 14, 14, 15,
                    15, 15, 17, 16, 16, 19, 17, 17, 17, 19, 18, 18, 13, 14, 15,
                    16, 16, 16, 17, 16, 17, 17, 18, 18, 21, 20, 21, 18,
                ],
                t15l: [
                    3, 5, 6, 8, 8, 9, 10, 10, 10, 11, 11, 12, 12, 12, 13, 14, 5,
                    5, 7, 8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 12, 13, 13, 6, 7,
                    7, 8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 13, 13, 13, 7, 8, 8,
                    9, 9, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 8, 8, 9,
                    9, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 13, 13, 9, 9, 9,
                    10, 10, 10, 11, 11, 11, 11, 12, 12, 13, 13, 13, 14, 10, 9,
                    10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 13, 14, 14, 10,
                    10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 14,
                    10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 14, 14,
                    14, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 13, 13, 13, 14,
                    14, 14, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 13,
                    14, 15, 14, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13,
                    14, 14, 14, 15, 12, 12, 11, 12, 12, 12, 13, 13, 13, 13, 13,
                    13, 14, 14, 15, 15, 12, 12, 12, 12, 12, 13, 13, 13, 13, 14,
                    14, 14, 14, 14, 15, 15, 13, 13, 13, 13, 13, 13, 13, 13, 14,
                    14, 14, 14, 15, 15, 14, 15, 13, 13, 13, 13, 13, 13, 13, 14,
                    14, 14, 14, 14, 15, 15, 15, 15,
                ],
                t16_5l: [
                    1, 5, 7, 9, 10, 10, 11, 11, 12, 12, 12, 13, 13, 13, 14, 11,
                    4, 6, 8, 9, 10, 11, 11, 11, 12, 12, 12, 13, 14, 13, 14, 11,
                    7, 8, 9, 10, 11, 11, 12, 12, 13, 12, 13, 13, 13, 14, 14, 12,
                    9, 9, 10, 11, 11, 12, 12, 12, 13, 13, 14, 14, 14, 15, 15,
                    13, 10, 10, 11, 11, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15,
                    15, 12, 10, 10, 11, 11, 12, 13, 13, 14, 13, 14, 14, 15, 15,
                    15, 16, 13, 11, 11, 11, 12, 13, 13, 13, 13, 14, 14, 14, 14,
                    15, 15, 16, 13, 11, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15,
                    15, 15, 17, 17, 13, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15,
                    15, 15, 16, 16, 16, 13, 12, 12, 12, 13, 13, 14, 14, 15, 15,
                    15, 15, 16, 15, 16, 15, 14, 12, 13, 12, 13, 14, 14, 14, 14,
                    15, 16, 16, 16, 17, 17, 16, 13, 13, 13, 13, 13, 14, 14, 15,
                    16, 16, 16, 16, 16, 16, 15, 16, 14, 13, 14, 14, 14, 14, 15,
                    15, 15, 15, 17, 16, 16, 16, 16, 18, 14, 15, 14, 14, 14, 15,
                    15, 16, 16, 16, 18, 17, 17, 17, 19, 17, 14, 14, 15, 13, 14,
                    16, 16, 15, 16, 16, 17, 18, 17, 19, 17, 16, 14, 11, 11, 11,
                    12, 12, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 12,
                ],
                t16l: [
                    1, 5, 7, 9, 10, 10, 11, 11, 12, 12, 12, 13, 13, 13, 14, 10,
                    4, 6, 8, 9, 10, 11, 11, 11, 12, 12, 12, 13, 14, 13, 14, 10,
                    7, 8, 9, 10, 11, 11, 12, 12, 13, 12, 13, 13, 13, 14, 14, 11,
                    9, 9, 10, 11, 11, 12, 12, 12, 13, 13, 14, 14, 14, 15, 15,
                    12, 10, 10, 11, 11, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15,
                    15, 11, 10, 10, 11, 11, 12, 13, 13, 14, 13, 14, 14, 15, 15,
                    15, 16, 12, 11, 11, 11, 12, 13, 13, 13, 13, 14, 14, 14, 14,
                    15, 15, 16, 12, 11, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15,
                    15, 15, 17, 17, 12, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15,
                    15, 15, 16, 16, 16, 12, 12, 12, 12, 13, 13, 14, 14, 15, 15,
                    15, 15, 16, 15, 16, 15, 13, 12, 13, 12, 13, 14, 14, 14, 14,
                    15, 16, 16, 16, 17, 17, 16, 12, 13, 13, 13, 13, 14, 14, 15,
                    16, 16, 16, 16, 16, 16, 15, 16, 13, 13, 14, 14, 14, 14, 15,
                    15, 15, 15, 17, 16, 16, 16, 16, 18, 13, 15, 14, 14, 14, 15,
                    15, 16, 16, 16, 18, 17, 17, 17, 19, 17, 13, 14, 15, 13, 14,
                    16, 16, 15, 16, 16, 17, 18, 17, 19, 17, 16, 13, 10, 10, 10,
                    11, 11, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 10,
                ],
                t24l: [
                    4, 5, 7, 8, 9, 10, 10, 11, 11, 12, 12, 12, 12, 12, 13, 10,
                    5, 6, 7, 8, 9, 10, 10, 11, 11, 11, 12, 12, 12, 12, 12, 10,
                    7, 7, 8, 9, 9, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 9, 8,
                    8, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 9, 9,
                    9, 9, 10, 10, 10, 10, 11, 11, 11, 12, 12, 12, 12, 13, 9, 10,
                    9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 9,
                    10, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13,
                    9, 11, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13,
                    13, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12,
                    13, 13, 10, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12,
                    13, 13, 13, 10, 12, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12,
                    13, 13, 13, 13, 10, 12, 12, 11, 11, 11, 12, 12, 12, 12, 12,
                    12, 13, 13, 13, 13, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12,
                    12, 13, 13, 13, 13, 13, 10, 12, 12, 12, 12, 12, 12, 12, 12,
                    13, 13, 13, 13, 13, 13, 13, 10, 13, 12, 12, 12, 12, 12, 12,
                    13, 13, 13, 13, 13, 13, 13, 13, 10, 9, 9, 9, 9, 9, 9, 9, 9,
                    9, 9, 9, 10, 10, 10, 10, 6,
                ],
                t32l: [1, 5, 5, 7, 5, 8, 7, 9, 5, 7, 7, 9, 7, 9, 9, 10],
                t33l: [4, 5, 5, 6, 5, 6, 6, 7, 5, 6, 6, 7, 6, 7, 7, 8],
            };
            (n.ht = [
                new a(0, 0, null, null),
                new a(2, 0, n.t1HB, n.t1l),
                new a(3, 0, n.t2HB, n.t2l),
                new a(3, 0, n.t3HB, n.t3l),
                new a(0, 0, null, null),
                new a(4, 0, n.t5HB, n.t5l),
                new a(4, 0, n.t6HB, n.t6l),
                new a(6, 0, n.t7HB, n.t7l),
                new a(6, 0, n.t8HB, n.t8l),
                new a(6, 0, n.t9HB, n.t9l),
                new a(8, 0, n.t10HB, n.t10l),
                new a(8, 0, n.t11HB, n.t11l),
                new a(8, 0, n.t12HB, n.t12l),
                new a(16, 0, n.t13HB, n.t13l),
                new a(0, 0, null, n.t16_5l),
                new a(16, 0, n.t15HB, n.t15l),
                new a(1, 1, n.t16HB, n.t16l),
                new a(2, 3, n.t16HB, n.t16l),
                new a(3, 7, n.t16HB, n.t16l),
                new a(4, 15, n.t16HB, n.t16l),
                new a(6, 63, n.t16HB, n.t16l),
                new a(8, 255, n.t16HB, n.t16l),
                new a(10, 1023, n.t16HB, n.t16l),
                new a(13, 8191, n.t16HB, n.t16l),
                new a(4, 15, n.t24HB, n.t24l),
                new a(5, 31, n.t24HB, n.t24l),
                new a(6, 63, n.t24HB, n.t24l),
                new a(7, 127, n.t24HB, n.t24l),
                new a(8, 255, n.t24HB, n.t24l),
                new a(9, 511, n.t24HB, n.t24l),
                new a(11, 2047, n.t24HB, n.t24l),
                new a(13, 8191, n.t24HB, n.t24l),
                new a(0, 0, n.t32HB, n.t32l),
                new a(0, 0, n.t33HB, n.t33l),
            ]),
                (n.largetbl = [
                    65540, 327685, 458759, 589832, 655369, 655370, 720906,
                    720907, 786443, 786444, 786444, 851980, 851980, 851980,
                    917517, 655370, 262149, 393222, 524295, 589832, 655369,
                    720906, 720906, 720907, 786443, 786443, 786444, 851980,
                    917516, 851980, 917516, 655370, 458759, 524295, 589832,
                    655369, 720905, 720906, 786442, 786443, 851979, 786443,
                    851979, 851980, 851980, 917516, 917517, 720905, 589832,
                    589832, 655369, 720905, 720906, 786442, 786442, 786443,
                    851979, 851979, 917515, 917516, 917516, 983052, 983052,
                    786441, 655369, 655369, 720905, 720906, 786442, 786442,
                    851978, 851979, 851979, 917515, 917516, 917516, 983052,
                    983052, 983053, 720905, 655370, 655369, 720906, 720906,
                    786442, 851978, 851979, 917515, 851979, 917515, 917516,
                    983052, 983052, 983052, 1048588, 786441, 720906, 720906,
                    720906, 786442, 851978, 851979, 851979, 851979, 917515,
                    917516, 917516, 917516, 983052, 983052, 1048589, 786441,
                    720907, 720906, 786442, 786442, 851979, 851979, 851979,
                    917515, 917516, 983052, 983052, 983052, 983052, 1114125,
                    1114125, 786442, 720907, 786443, 786443, 851979, 851979,
                    851979, 917515, 917515, 983051, 983052, 983052, 983052,
                    1048588, 1048589, 1048589, 786442, 786443, 786443, 786443,
                    851979, 851979, 917515, 917515, 983052, 983052, 983052,
                    983052, 1048588, 983053, 1048589, 983053, 851978, 786444,
                    851979, 786443, 851979, 917515, 917516, 917516, 917516,
                    983052, 1048588, 1048588, 1048589, 1114125, 1114125,
                    1048589, 786442, 851980, 851980, 851979, 851979, 917515,
                    917516, 983052, 1048588, 1048588, 1048588, 1048588, 1048589,
                    1048589, 983053, 1048589, 851978, 851980, 917516, 917516,
                    917516, 917516, 983052, 983052, 983052, 983052, 1114124,
                    1048589, 1048589, 1048589, 1048589, 1179661, 851978, 983052,
                    917516, 917516, 917516, 983052, 983052, 1048588, 1048588,
                    1048589, 1179661, 1114125, 1114125, 1114125, 1245197,
                    1114125, 851978, 917517, 983052, 851980, 917516, 1048588,
                    1048588, 983052, 1048589, 1048589, 1114125, 1179661,
                    1114125, 1245197, 1114125, 1048589, 851978, 655369, 655369,
                    655369, 720905, 720905, 786441, 786441, 786441, 851977,
                    851977, 851977, 851978, 851978, 851978, 851978, 655366,
                ]),
                (n.table23 = [
                    65538, 262147, 458759, 262148, 327684, 458759, 393222,
                    458759, 524296,
                ]),
                (n.table56 = [
                    65539, 262148, 458758, 524296, 262148, 327684, 524294,
                    589831, 458757, 524294, 589831, 655368, 524295, 524295,
                    589832, 655369,
                ]),
                (n.bitrate_table = [
                    [
                        0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144,
                        160, -1,
                    ],
                    [
                        0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224,
                        256, 320, -1,
                    ],
                    [
                        0, 8, 16, 24, 32, 40, 48, 56, 64, -1, -1, -1, -1, -1,
                        -1, -1,
                    ],
                ]),
                (n.samplerate_table = [
                    [22050, 24e3, 16e3, -1],
                    [44100, 48e3, 32e3, -1],
                    [11025, 12e3, 8e3, -1],
                ]),
                (n.scfsi_band = [0, 6, 11, 16, 21]),
                (e.exports = n);
        },
        function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.encodeMP3 = t.encodeWAV = t.encodePCM = t.compress = void 0);
            var n = a(10);
            function s(e, t, a) {
                for (var n = 0; n < a.length; n++)
                    e.setUint8(t + n, a.charCodeAt(n));
            }
            (t.compress = function (e, t, a) {
                for (
                    var n = t / a,
                        s = Math.max(n, 1),
                        r = e.left,
                        i = e.right,
                        o = Math.floor((r.length + i.length) / n),
                        _ = new Float32Array(o),
                        l = 0,
                        f = 0;
                    l < o;

                ) {
                    var c = Math.floor(f);
                    (_[l] = r[c]),
                        l++,
                        i.length && ((_[l] = i[c]), l++),
                        (f += s);
                }
                return _;
            }),
                (t.encodePCM = function (e, t, a) {
                    void 0 === a && (a = !0);
                    var n = 0,
                        s = e.length * (t / 8),
                        r = new ArrayBuffer(s),
                        i = new DataView(r);
                    if (8 === t)
                        for (var o = 0; o < e.length; o++, n++) {
                            var _ =
                                (l = Math.max(-1, Math.min(1, e[o]))) < 0
                                    ? 128 * l
                                    : 127 * l;
                            (_ = +_ + 128), i.setInt8(n, _);
                        }
                    else
                        for (o = 0; o < e.length; o++, n += 2) {
                            var l = Math.max(-1, Math.min(1, e[o]));
                            i.setInt16(n, l < 0 ? 32768 * l : 32767 * l, a);
                        }
                    return i;
                }),
                (t.encodeWAV = function (e, t, a, n, r, i) {
                    void 0 === i && (i = !0);
                    var o = a > t ? t : a,
                        _ = r,
                        l = new ArrayBuffer(44 + e.byteLength),
                        f = new DataView(l),
                        c = n,
                        u = 0;
                    s(f, u, "RIFF"),
                        (u += 4),
                        f.setUint32(u, 36 + e.byteLength, i),
                        s(f, (u += 4), "WAVE"),
                        s(f, (u += 4), "fmt "),
                        (u += 4),
                        f.setUint32(u, 16, i),
                        (u += 4),
                        f.setUint16(u, 1, i),
                        (u += 2),
                        f.setUint16(u, c, i),
                        (u += 2),
                        f.setUint32(u, o, i),
                        (u += 4),
                        f.setUint32(u, c * o * (_ / 8), i),
                        (u += 4),
                        f.setUint16(u, c * (_ / 8), i),
                        (u += 2),
                        f.setUint16(u, _, i),
                        s(f, (u += 2), "data"),
                        (u += 4),
                        f.setUint32(u, e.byteLength, i),
                        (u += 4);
                    for (var h = 0; h < e.byteLength; )
                        f.setUint8(u, e.getUint8(h)), u++, h++;
                    return f;
                }),
                (t.encodeMP3 = function (e, t, a, s, r, i) {
                    void 0 === i && (i = !0);
                    for (
                        var o = a > t ? t : a,
                            _ = s,
                            l = new n.Mp3Encoder(_, o, 128),
                            f = [],
                            c =
                                e.left &&
                                new Int16Array(
                                    e.left.buffer,
                                    0,
                                    e.left.byteLength / 2
                                ),
                            u =
                                e.right &&
                                new Int16Array(
                                    e.right.buffer,
                                    0,
                                    e.right.byteLength / 2
                                ),
                            h = c.length + (u ? u.length : 0),
                            p = 0;
                        p < h;
                        p += 1152
                    ) {
                        var b = c.subarray(p, p + 1152),
                            m = null,
                            d = null;
                        2 === _
                            ? ((m = u.subarray(p, p + 1152)),
                              (d = l.encodeBuffer(b, m)))
                            : (d = l.encodeBuffer(b)),
                            d.length > 0 && f.push(d);
                    }
                    var v = l.flush();
                    return v.length > 0 && f.push(v), f;
                });
        },
        function (e, t, a) {
            var n = a(0),
                s =
                    (n.System,
                    n.VbrMode,
                    n.Float,
                    n.ShortBlock,
                    n.Util,
                    n.Arrays,
                    n.new_array_n,
                    n.new_byte),
                r =
                    (n.new_double,
                    n.new_float,
                    n.new_float_n,
                    n.new_int,
                    n.new_int_n,
                    n.assert),
                i = a(5),
                o = a(30),
                _ = a(13),
                l = a(16),
                f = a(31),
                c = a(15),
                u = a(35),
                h = a(2),
                p = a(7),
                b = (a(1), a(36)),
                m = a(37);
            function d() {
                this.setModules = function (e, t) {
                    e, t;
                };
            }
            function v() {
                this.setModules = function (e, t, a) {
                    e, t, a;
                };
            }
            function g() {}
            function S() {
                this.setModules = function (e, t) {
                    e, t;
                };
            }
            function w() {
                (this.dataOffset = 0),
                    (this.dataLen = 0),
                    (this.channels = 0),
                    (this.sampleRate = 0);
            }
            function M(e) {
                return (
                    (e.charCodeAt(0) << 24) |
                    (e.charCodeAt(1) << 16) |
                    (e.charCodeAt(2) << 8) |
                    e.charCodeAt(3)
                );
            }
            (w.RIFF = M("RIFF")),
                (w.WAVE = M("WAVE")),
                (w.fmt_ = M("fmt ")),
                (w.data = M("data")),
                (w.readHeader = function (e) {
                    var t = new w(),
                        a = e.getUint32(0, !1);
                    if (w.RIFF == a) {
                        e.getUint32(4, !0);
                        if (
                            w.WAVE == e.getUint32(8, !1) &&
                            w.fmt_ == e.getUint32(12, !1)
                        ) {
                            var n = e.getUint32(16, !0),
                                s = 20;
                            switch (n) {
                                case 16:
                                case 18:
                                    (t.channels = e.getUint16(s + 2, !0)),
                                        (t.sampleRate = e.getUint32(s + 4, !0));
                                    break;
                                default:
                                    throw "extended fmt chunk not implemented";
                            }
                            s += n;
                            for (
                                var r = w.data, i = 0;
                                r != a &&
                                ((a = e.getUint32(s, !1)),
                                (i = e.getUint32(s + 4, !0)),
                                r != a);

                            )
                                s += i + 8;
                            return (t.dataLen = i), (t.dataOffset = s + 8), t;
                        }
                    }
                }),
                (e.exports.Mp3Encoder = function (e, t, a) {
                    3 != arguments.length &&
                        (console.error(
                            "WARN: Mp3Encoder(channels, samplerate, kbps) not specified"
                        ),
                        (e = 1),
                        (t = 44100),
                        (a = 128));
                    var n = new i(),
                        w = new d(),
                        M = new _(),
                        A = new p(),
                        y = new o(),
                        R = new l(),
                        B = new f(),
                        E = new m(),
                        T = new b(),
                        x = new S(),
                        k = new u(),
                        P = new c(),
                        I = new v(),
                        V = new g();
                    n.setModules(M, A, y, R, B, E, T, x, V),
                        A.setModules(M, V, T, E),
                        x.setModules(A, T),
                        y.setModules(n),
                        B.setModules(A, k, R, P),
                        R.setModules(P, k, n.enc.psy),
                        k.setModules(A),
                        P.setModules(R),
                        E.setModules(n, A, T),
                        w.setModules(I, V),
                        I.setModules(T, x, y);
                    var O = n.lame_init();
                    (O.num_channels = e),
                        (O.in_samplerate = t),
                        (O.brate = a),
                        (O.mode = h.STEREO),
                        (O.quality = 3),
                        (O.bWriteVbrTag = !1),
                        (O.disable_reservoir = !0),
                        (O.write_id3tag_automatic = !1);
                    var L = n.lame_init_params(O);
                    r(0 == L);
                    var H = 1152,
                        N = 0 | (1.25 * H + 7200),
                        D = s(N);
                    (this.encodeBuffer = function (t, a) {
                        1 == e && (a = t),
                            r(t.length == a.length),
                            t.length > H &&
                                ((H = t.length),
                                (D = s((N = 0 | (1.25 * H + 7200)))));
                        var i = n.lame_encode_buffer(
                            O,
                            t,
                            a,
                            t.length,
                            D,
                            0,
                            N
                        );
                        return new Int8Array(D.subarray(0, i));
                    }),
                        (this.flush = function () {
                            var e = n.lame_encode_flush(O, D, 0, N);
                            return new Int8Array(D.subarray(0, e));
                        });
                }),
                (e.exports.WavHeader = w);
        },
        function (e, t, a) {
            var n = a(1),
                s = a(0),
                r = s.System,
                i =
                    (s.VbrMode,
                    s.Float,
                    s.ShortBlock,
                    s.Util,
                    s.Arrays,
                    s.new_array_n,
                    s.new_byte,
                    s.new_double,
                    s.new_float),
                o = s.new_float_n;
            s.new_int, s.new_int_n, s.assert;
            e.exports = function () {
                (this.l = i(n.SBMAX_l)), (this.s = o([n.SBMAX_s, 3]));
                var e = this;
                this.assign = function (t) {
                    r.arraycopy(t.l, 0, e.l, 0, n.SBMAX_l);
                    for (var a = 0; a < n.SBMAX_s; a++)
                        for (var s = 0; s < 3; s++) e.s[a][s] = t.s[a][s];
                };
            };
        },
        function (e, t, a) {
            var n = a(0),
                s = n.System,
                r =
                    (n.VbrMode,
                    n.Float,
                    n.ShortBlock,
                    n.Util,
                    n.Arrays,
                    n.new_array_n,
                    n.new_byte,
                    n.new_double,
                    n.new_float,
                    n.new_float_n,
                    n.new_int),
                i = (n.new_int_n, n.assert, a(1));
            e.exports = function (e, t, a, n) {
                (this.l = r(1 + i.SBMAX_l)),
                    (this.s = r(1 + i.SBMAX_s)),
                    (this.psfb21 = r(1 + i.PSFB21)),
                    (this.psfb12 = r(1 + i.PSFB12));
                var o = this.l,
                    _ = this.s;
                4 == arguments.length &&
                    ((this.arrL = arguments[0]),
                    (this.arrS = arguments[1]),
                    (this.arr21 = arguments[2]),
                    (this.arr12 = arguments[3]),
                    s.arraycopy(
                        this.arrL,
                        0,
                        o,
                        0,
                        Math.min(this.arrL.length, this.l.length)
                    ),
                    s.arraycopy(
                        this.arrS,
                        0,
                        _,
                        0,
                        Math.min(this.arrS.length, this.s.length)
                    ),
                    s.arraycopy(
                        this.arr21,
                        0,
                        this.psfb21,
                        0,
                        Math.min(this.arr21.length, this.psfb21.length)
                    ),
                    s.arraycopy(
                        this.arr12,
                        0,
                        this.psfb12,
                        0,
                        Math.min(this.arr12.length, this.psfb12.length)
                    ));
            };
        },
        function (e, t, a) {
            var n = a(0),
                s = n.System,
                r = (n.VbrMode, n.Float, n.ShortBlock, n.Util, n.Arrays);
            n.new_array_n,
                n.new_byte,
                n.new_double,
                n.new_float,
                n.new_float_n,
                n.new_int,
                n.new_int_n,
                n.assert;
            function i() {
                i.YULE_ORDER, i.MAX_SAMP_FREQ;
                var e = i.RMS_WINDOW_TIME_NUMERATOR,
                    t = i.RMS_WINDOW_TIME_DENOMINATOR,
                    a =
                        (i.MAX_SAMPLES_PER_WINDOW,
                        [
                            [
                                0.038575994352, -3.84664617118067,
                                -0.02160367184185, 7.81501653005538,
                                -0.00123395316851, -11.34170355132042,
                                -9291677959e-14, 13.05504219327545,
                                -0.01655260341619, -12.28759895145294,
                                0.02161526843274, 9.4829380631979,
                                -0.02074045215285, -5.87257861775999,
                                0.00594298065125, 2.75465861874613,
                                0.00306428023191, -0.86984376593551,
                                0.00012025322027, 0.13919314567432,
                                0.00288463683916,
                            ],
                            [
                                0.0541865640643, -3.47845948550071,
                                -0.02911007808948, 6.36317777566148,
                                -0.00848709379851, -8.54751527471874,
                                -0.00851165645469, 9.4769360780128,
                                -0.00834990904936, -8.81498681370155,
                                0.02245293253339, 6.85401540936998,
                                -0.02596338512915, -4.39470996079559,
                                0.01624864962975, 2.19611684890774,
                                -0.00240879051584, -0.75104302451432,
                                0.00674613682247, 0.13149317958808,
                                -0.00187763777362,
                            ],
                            [
                                0.15457299681924, -2.37898834973084,
                                -0.09331049056315, 2.84868151156327,
                                -0.06247880153653, -2.64577170229825,
                                0.02163541888798, 2.23697657451713,
                                -0.05588393329856, -1.67148153367602,
                                0.04781476674921, 1.00595954808547,
                                0.00222312597743, -0.45953458054983,
                                0.03174092540049, 0.16378164858596,
                                -0.01390589421898, -0.05032077717131,
                                0.00651420667831, 0.0234789740702,
                                -0.00881362733839,
                            ],
                            [
                                0.30296907319327, -1.61273165137247,
                                -0.22613988682123, 1.0797749225997,
                                -0.08587323730772, -0.2565625775407,
                                0.03282930172664, -0.1627671912044,
                                -0.00915702933434, -0.22638893773906,
                                -0.02364141202522, 0.39120800788284,
                                -0.00584456039913, -0.22138138954925,
                                0.06276101321749, 0.04500235387352,
                                -828086748e-14, 0.02005851806501,
                                0.00205861885564, 0.00302439095741,
                                -0.02950134983287,
                            ],
                            [
                                0.33642304856132, -1.49858979367799,
                                -0.2557224142557, 0.87350271418188,
                                -0.11828570177555, 0.12205022308084,
                                0.11921148675203, -0.80774944671438,
                                -0.07834489609479, 0.47854794562326,
                                -0.0046997791438, -0.12453458140019,
                                -0.0058950022444, -0.04067510197014,
                                0.05724228140351, 0.08333755284107,
                                0.00832043980773, -0.04237348025746,
                                -0.0163538138454, 0.02977207319925,
                                -0.0176017656815,
                            ],
                            [
                                0.4491525660845, -0.62820619233671,
                                -0.14351757464547, 0.29661783706366,
                                -0.22784394429749, -0.372563729424,
                                -0.01419140100551, 0.00213767857124,
                                0.04078262797139, -0.42029820170918,
                                -0.12398163381748, 0.22199650564824,
                                0.04097565135648, 0.00613424350682,
                                0.10478503600251, 0.06747620744683,
                                -0.01863887810927, 0.05784820375801,
                                -0.03193428438915, 0.03222754072173,
                                0.00541907748707,
                            ],
                            [
                                0.56619470757641, -1.04800335126349,
                                -0.75464456939302, 0.29156311971249,
                                0.1624213774223, -0.26806001042947,
                                0.16744243493672, 0.00819999645858,
                                -0.18901604199609, 0.45054734505008,
                                0.3093178284183, -0.33032403314006,
                                -0.27562961986224, 0.0673936833311,
                                0.00647310677246, -0.04784254229033,
                                0.08647503780351, 0.01639907836189,
                                -0.0378898455484, 0.01807364323573,
                                -0.00588215443421,
                            ],
                            [
                                0.58100494960553, -0.51035327095184,
                                -0.53174909058578, -0.31863563325245,
                                -0.14289799034253, -0.20256413484477,
                                0.17520704835522, 0.1472815413433,
                                0.02377945217615, 0.38952639978999,
                                0.15558449135573, -0.23313271880868,
                                -0.25344790059353, -0.05246019024463,
                                0.01628462406333, -0.02505961724053,
                                0.06920467763959, 0.02442357316099,
                                -0.03721611395801, 0.01818801111503,
                                -0.00749618797172,
                            ],
                            [
                                0.53648789255105, -0.2504987195602,
                                -0.42163034350696, -0.43193942311114,
                                -0.00275953611929, -0.03424681017675,
                                0.04267842219415, -0.04678328784242,
                                -0.10214864179676, 0.26408300200955,
                                0.14590772289388, 0.15113130533216,
                                -0.02459864859345, -0.17556493366449,
                                -0.11202315195388, -0.18823009262115,
                                -0.04060034127, 0.05477720428674,
                                0.0478866554818, 0.0470440968812,
                                -0.02217936801134,
                            ],
                        ]),
                    n = [
                        [
                            0.98621192462708, -1.97223372919527,
                            -1.97242384925416, 0.97261396931306,
                            0.98621192462708,
                        ],
                        [
                            0.98500175787242, -1.96977855582618,
                            -1.97000351574484, 0.9702284756635,
                            0.98500175787242,
                        ],
                        [
                            0.97938932735214, -1.95835380975398,
                            -1.95877865470428, 0.95920349965459,
                            0.97938932735214,
                        ],
                        [
                            0.97531843204928, -1.95002759149878,
                            -1.95063686409857, 0.95124613669835,
                            0.97531843204928,
                        ],
                        [
                            0.97316523498161, -1.94561023566527,
                            -1.94633046996323, 0.94705070426118,
                            0.97316523498161,
                        ],
                        [
                            0.96454515552826, -1.92783286977036,
                            -1.92909031105652, 0.93034775234268,
                            0.96454515552826,
                        ],
                        [
                            0.96009142950541, -1.91858953033784,
                            -1.92018285901082, 0.92177618768381,
                            0.96009142950541,
                        ],
                        [
                            0.95856916599601, -1.9154210807478,
                            -1.91713833199203, 0.91885558323625,
                            0.95856916599601,
                        ],
                        [
                            0.94597685600279, -1.88903307939452,
                            -1.89195371200558, 0.89487434461664,
                            0.94597685600279,
                        ],
                    ];
                function o(e, t, a, n, s, r) {
                    for (; 0 != s--; )
                        (a[n] =
                            1e-10 +
                            e[t + 0] * r[0] -
                            a[n - 1] * r[1] +
                            e[t - 1] * r[2] -
                            a[n - 2] * r[3] +
                            e[t - 2] * r[4] -
                            a[n - 3] * r[5] +
                            e[t - 3] * r[6] -
                            a[n - 4] * r[7] +
                            e[t - 4] * r[8] -
                            a[n - 5] * r[9] +
                            e[t - 5] * r[10] -
                            a[n - 6] * r[11] +
                            e[t - 6] * r[12] -
                            a[n - 7] * r[13] +
                            e[t - 7] * r[14] -
                            a[n - 8] * r[15] +
                            e[t - 8] * r[16] -
                            a[n - 9] * r[17] +
                            e[t - 9] * r[18] -
                            a[n - 10] * r[19] +
                            e[t - 10] * r[20]),
                            ++n,
                            ++t;
                }
                function _(e, t, a, n, s, r) {
                    for (; 0 != s--; )
                        (a[n] =
                            e[t + 0] * r[0] -
                            a[n - 1] * r[1] +
                            e[t - 1] * r[2] -
                            a[n - 2] * r[3] +
                            e[t - 2] * r[4]),
                            ++n,
                            ++t;
                }
                function l(e) {
                    return e * e;
                }
                (this.InitGainAnalysis = function (a, n) {
                    return (function (a, n) {
                        for (var s = 0; s < MAX_ORDER; s++)
                            a.linprebuf[s] =
                                a.lstepbuf[s] =
                                a.loutbuf[s] =
                                a.rinprebuf[s] =
                                a.rstepbuf[s] =
                                a.routbuf[s] =
                                    0;
                        switch (0 | n) {
                            case 48e3:
                                a.reqindex = 0;
                                break;
                            case 44100:
                                a.reqindex = 1;
                                break;
                            case 32e3:
                                a.reqindex = 2;
                                break;
                            case 24e3:
                                a.reqindex = 3;
                                break;
                            case 22050:
                                a.reqindex = 4;
                                break;
                            case 16e3:
                                a.reqindex = 5;
                                break;
                            case 12e3:
                                a.reqindex = 6;
                                break;
                            case 11025:
                                a.reqindex = 7;
                                break;
                            case 8e3:
                                a.reqindex = 8;
                                break;
                            default:
                                return INIT_GAIN_ANALYSIS_ERROR;
                        }
                        return (
                            (a.sampleWindow = 0 | ((n * e + t - 1) / t)),
                            (a.lsum = 0),
                            (a.rsum = 0),
                            (a.totsamp = 0),
                            r.ill(a.A, 0),
                            INIT_GAIN_ANALYSIS_OK
                        );
                    })(a, n) != INIT_GAIN_ANALYSIS_OK
                        ? INIT_GAIN_ANALYSIS_ERROR
                        : ((a.linpre = MAX_ORDER),
                          (a.rinpre = MAX_ORDER),
                          (a.lstep = MAX_ORDER),
                          (a.rstep = MAX_ORDER),
                          (a.lout = MAX_ORDER),
                          (a.rout = MAX_ORDER),
                          r.fill(a.B, 0),
                          INIT_GAIN_ANALYSIS_OK);
                }),
                    (this.AnalyzeSamples = function (e, t, r, f, c, u, h) {
                        var p, b, m, d, v, g, S;
                        if (0 == u) return GAIN_ANALYSIS_OK;
                        switch (((S = 0), (v = u), h)) {
                            case 1:
                                (f = t), (c = r);
                                break;
                            case 2:
                                break;
                            default:
                                return GAIN_ANALYSIS_ERROR;
                        }
                        for (
                            u < MAX_ORDER
                                ? (s.arraycopy(t, r, e.linprebuf, MAX_ORDER, u),
                                  s.arraycopy(f, c, e.rinprebuf, MAX_ORDER, u))
                                : (s.arraycopy(
                                      t,
                                      r,
                                      e.linprebuf,
                                      MAX_ORDER,
                                      MAX_ORDER
                                  ),
                                  s.arraycopy(
                                      f,
                                      c,
                                      e.rinprebuf,
                                      MAX_ORDER,
                                      MAX_ORDER
                                  ));
                            v > 0;

                        ) {
                            (g =
                                v > e.sampleWindow - e.totsamp
                                    ? e.sampleWindow - e.totsamp
                                    : v),
                                S < MAX_ORDER
                                    ? ((p = e.linpre + S),
                                      (b = e.linprebuf),
                                      (m = e.rinpre + S),
                                      (d = e.rinprebuf),
                                      g > MAX_ORDER - S && (g = MAX_ORDER - S))
                                    : ((p = r + S),
                                      (b = t),
                                      (m = c + S),
                                      (d = f)),
                                o(
                                    b,
                                    p,
                                    e.lstepbuf,
                                    e.lstep + e.totsamp,
                                    g,
                                    a[e.reqindex]
                                ),
                                o(
                                    d,
                                    m,
                                    e.rstepbuf,
                                    e.rstep + e.totsamp,
                                    g,
                                    a[e.reqindex]
                                ),
                                _(
                                    e.lstepbuf,
                                    e.lstep + e.totsamp,
                                    e.loutbuf,
                                    e.lout + e.totsamp,
                                    g,
                                    n[e.reqindex]
                                ),
                                _(
                                    e.rstepbuf,
                                    e.rstep + e.totsamp,
                                    e.routbuf,
                                    e.rout + e.totsamp,
                                    g,
                                    n[e.reqindex]
                                ),
                                (p = e.lout + e.totsamp),
                                (b = e.loutbuf),
                                (m = e.rout + e.totsamp),
                                (d = e.routbuf);
                            for (var w = g % 8; 0 != w--; )
                                (e.lsum += l(b[p++])), (e.rsum += l(d[m++]));
                            for (w = g / 8; 0 != w--; )
                                (e.lsum +=
                                    l(b[p + 0]) +
                                    l(b[p + 1]) +
                                    l(b[p + 2]) +
                                    l(b[p + 3]) +
                                    l(b[p + 4]) +
                                    l(b[p + 5]) +
                                    l(b[p + 6]) +
                                    l(b[p + 7])),
                                    (p += 8),
                                    (e.rsum +=
                                        l(d[m + 0]) +
                                        l(d[m + 1]) +
                                        l(d[m + 2]) +
                                        l(d[m + 3]) +
                                        l(d[m + 4]) +
                                        l(d[m + 5]) +
                                        l(d[m + 6]) +
                                        l(d[m + 7])),
                                    (m += 8);
                            if (
                                ((v -= g),
                                (S += g),
                                (e.totsamp += g),
                                e.totsamp == e.sampleWindow)
                            ) {
                                var M =
                                        10 *
                                        i.STEPS_per_dB *
                                        Math.log10(
                                            ((e.lsum + e.rsum) / e.totsamp) *
                                                0.5 +
                                                1e-37
                                        ),
                                    A = M <= 0 ? 0 : 0 | M;
                                A >= e.A.length && (A = e.A.length - 1),
                                    e.A[A]++,
                                    (e.lsum = e.rsum = 0),
                                    s.arraycopy(
                                        e.loutbuf,
                                        e.totsamp,
                                        e.loutbuf,
                                        0,
                                        MAX_ORDER
                                    ),
                                    s.arraycopy(
                                        e.routbuf,
                                        e.totsamp,
                                        e.routbuf,
                                        0,
                                        MAX_ORDER
                                    ),
                                    s.arraycopy(
                                        e.lstepbuf,
                                        e.totsamp,
                                        e.lstepbuf,
                                        0,
                                        MAX_ORDER
                                    ),
                                    s.arraycopy(
                                        e.rstepbuf,
                                        e.totsamp,
                                        e.rstepbuf,
                                        0,
                                        MAX_ORDER
                                    ),
                                    (e.totsamp = 0);
                            }
                            if (e.totsamp > e.sampleWindow)
                                return GAIN_ANALYSIS_ERROR;
                        }
                        return (
                            u < MAX_ORDER
                                ? (s.arraycopy(
                                      e.linprebuf,
                                      u,
                                      e.linprebuf,
                                      0,
                                      MAX_ORDER - u
                                  ),
                                  s.arraycopy(
                                      e.rinprebuf,
                                      u,
                                      e.rinprebuf,
                                      0,
                                      MAX_ORDER - u
                                  ),
                                  s.arraycopy(
                                      t,
                                      r,
                                      e.linprebuf,
                                      MAX_ORDER - u,
                                      u
                                  ),
                                  s.arraycopy(
                                      f,
                                      c,
                                      e.rinprebuf,
                                      MAX_ORDER - u,
                                      u
                                  ))
                                : (s.arraycopy(
                                      t,
                                      r + u - MAX_ORDER,
                                      e.linprebuf,
                                      0,
                                      MAX_ORDER
                                  ),
                                  s.arraycopy(
                                      f,
                                      c + u - MAX_ORDER,
                                      e.rinprebuf,
                                      0,
                                      MAX_ORDER
                                  )),
                            GAIN_ANALYSIS_OK
                        );
                    }),
                    (this.GetTitleGain = function (e) {
                        for (
                            var t = (function (e, t) {
                                    var a,
                                        n = 0;
                                    for (a = 0; a < t; a++) n += e[a];
                                    if (0 == n) return GAIN_NOT_ENOUGH_SAMPLES;
                                    var s = 0 | Math.ceil(n * (1 - 0.95));
                                    for (
                                        a = t;
                                        a-- > 0 && !((s -= e[a]) <= 0);

                                    );
                                    return 64.82 - a / i.STEPS_per_dB;
                                })(e.A, e.A.length),
                                a = 0;
                            a < e.A.length;
                            a++
                        )
                            (e.B[a] += e.A[a]), (e.A[a] = 0);
                        for (a = 0; a < MAX_ORDER; a++)
                            e.linprebuf[a] =
                                e.lstepbuf[a] =
                                e.loutbuf[a] =
                                e.rinprebuf[a] =
                                e.rstepbuf[a] =
                                e.routbuf[a] =
                                    0;
                        return (e.totsamp = 0), (e.lsum = e.rsum = 0), t;
                    });
            }
            (i.STEPS_per_dB = 100),
                (i.MAX_dB = 120),
                (i.GAIN_NOT_ENOUGH_SAMPLES = -24601),
                (i.GAIN_ANALYSIS_ERROR = 0),
                (i.GAIN_ANALYSIS_OK = 1),
                (i.INIT_GAIN_ANALYSIS_ERROR = 0),
                (i.INIT_GAIN_ANALYSIS_OK = 1),
                (i.YULE_ORDER = 10),
                (i.MAX_ORDER = i.YULE_ORDER),
                (i.MAX_SAMP_FREQ = 48e3),
                (i.RMS_WINDOW_TIME_NUMERATOR = 1),
                (i.RMS_WINDOW_TIME_DENOMINATOR = 20),
                (i.MAX_SAMPLES_PER_WINDOW =
                    (i.MAX_SAMP_FREQ * i.RMS_WINDOW_TIME_NUMERATOR) /
                        i.RMS_WINDOW_TIME_DENOMINATOR +
                    1),
                (e.exports = i);
        },
        function (e, t) {
            e.exports = function (e) {
                this.bits = e;
            };
        },
        function (e, t, a) {
            var n = a(0),
                s = n.System,
                r = (n.VbrMode, n.Float, n.ShortBlock, n.Util, n.Arrays),
                i =
                    (n.new_array_n,
                    n.new_byte,
                    n.new_double,
                    n.new_float,
                    n.new_float_n,
                    n.new_int),
                o = (n.new_int_n, n.assert),
                _ = a(1),
                l = a(8),
                f = a(6),
                c = a(16);
            e.exports = function e() {
                var t = null;
                function a(e) {
                    this.bits = 0 | e;
                }
                (this.qupvt = null),
                    (this.setModules = function (e) {
                        (this.qupvt = e), (t = e);
                    });
                var n = [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 1],
                    [1, 1],
                    [1, 1],
                    [1, 2],
                    [2, 2],
                    [2, 3],
                    [2, 3],
                    [3, 4],
                    [3, 4],
                    [3, 4],
                    [4, 5],
                    [4, 5],
                    [4, 6],
                    [5, 6],
                    [5, 6],
                    [5, 7],
                    [6, 7],
                    [6, 7],
                ];
                function u(e, t, a, n, s, r) {
                    var i = 0.5946 / t;
                    for (o(e > 0), e >>= 1; 0 != e--; )
                        (s[r++] = i > a[n++] ? 0 : 1),
                            (s[r++] = i > a[n++] ? 0 : 1);
                }
                function h(e, a, n, s, r, i) {
                    o(e > 0);
                    var _ = (e >>= 1) % 2;
                    for (e >>= 1; 0 != e--; ) {
                        var l, f, c, u, h, p, b, m;
                        (l = n[s++] * a),
                            (f = n[s++] * a),
                            (h = 0 | l),
                            (c = n[s++] * a),
                            (p = 0 | f),
                            (u = n[s++] * a),
                            (b = 0 | c),
                            (l += t.adj43[h]),
                            (m = 0 | u),
                            (f += t.adj43[p]),
                            (r[i++] = 0 | l),
                            (c += t.adj43[b]),
                            (r[i++] = 0 | f),
                            (u += t.adj43[m]),
                            (r[i++] = 0 | c),
                            (r[i++] = 0 | u);
                    }
                    0 != _ &&
                        ((h = 0 | (l = n[s++] * a)),
                        (p = 0 | (f = n[s++] * a)),
                        (l += t.adj43[h]),
                        (f += t.adj43[p]),
                        (r[i++] = 0 | l),
                        (r[i++] = 0 | f));
                }
                var p = [1, 2, 5, 7, 7, 10, 10, 13, 13, 13, 13, 13, 13, 13, 13];
                function b(e, t, a, n) {
                    var s = (function (e, t, a) {
                        var n = 0,
                            s = 0;
                        do {
                            var r = e[t++],
                                i = e[t++];
                            n < r && (n = r), s < i && (s = i);
                        } while (t < a);
                        return n < s && (n = s), n;
                    })(e, t, a);
                    switch (s) {
                        case 0:
                            return s;
                        case 1:
                            return (function (e, t, a, n) {
                                var s = 0,
                                    r = l.ht[1].hlen;
                                do {
                                    var i = 2 * e[t + 0] + e[t + 1];
                                    (t += 2), (s += r[i]);
                                } while (t < a);
                                return (n.bits += s), 1;
                            })(e, t, a, n);
                        case 2:
                        case 3:
                            return (function (e, t, a, n, s) {
                                var r,
                                    i,
                                    o = 0,
                                    _ = l.ht[n].xlen;
                                i = 2 == n ? l.table23 : l.table56;
                                do {
                                    var f = e[t + 0] * _ + e[t + 1];
                                    (t += 2), (o += i[f]);
                                } while (t < a);
                                return (
                                    (r = 65535 & o),
                                    (o >>= 16) > r && ((o = r), n++),
                                    (s.bits += o),
                                    n
                                );
                            })(e, t, a, p[s - 1], n);
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                            return (function (e, t, a, n, s) {
                                var r = 0,
                                    i = 0,
                                    o = 0,
                                    _ = l.ht[n].xlen,
                                    f = l.ht[n].hlen,
                                    c = l.ht[n + 1].hlen,
                                    u = l.ht[n + 2].hlen;
                                do {
                                    var h = e[t + 0] * _ + e[t + 1];
                                    (t += 2),
                                        (r += f[h]),
                                        (i += c[h]),
                                        (o += u[h]);
                                } while (t < a);
                                var p = n;
                                return (
                                    r > i && ((r = i), p++),
                                    r > o && ((r = o), (p = n + 2)),
                                    (s.bits += r),
                                    p
                                );
                            })(e, t, a, p[s - 1], n);
                        default:
                            if (s > c.IXMAX_VAL)
                                return (n.bits = c.LARGE_BITS), -1;
                            var r, i;
                            for (
                                s -= 15, r = 24;
                                r < 32 && !(l.ht[r].linmax >= s);
                                r++
                            );
                            for (
                                i = r - 8;
                                i < 24 && !(l.ht[i].linmax >= s);
                                i++
                            );
                            return (function (e, t, a, n, s, r) {
                                var i,
                                    o = 65536 * l.ht[n].xlen + l.ht[s].xlen,
                                    _ = 0;
                                do {
                                    var f = e[t++],
                                        c = e[t++];
                                    0 != f &&
                                        (f > 14 && ((f = 15), (_ += o)),
                                        (f *= 16)),
                                        0 != c &&
                                            (c > 14 && ((c = 15), (_ += o)),
                                            (f += c)),
                                        (_ += l.largetbl[f]);
                                } while (t < a);
                                return (
                                    (i = 65535 & _),
                                    (_ >>= 16) > i && ((_ = i), (n = s)),
                                    (r.bits += _),
                                    n
                                );
                            })(e, t, a, i, r, n);
                    }
                }
                function m(e, t, n, s, r, i, o, l) {
                    for (var f = t.big_values, c = 2; c < _.SBMAX_l + 1; c++) {
                        var u = e.scalefac_band.l[c];
                        if (u >= f) break;
                        var h = r[c - 2] + t.count1bits;
                        if (n.part2_3_length <= h) break;
                        var p = new a(h),
                            m = b(s, u, f, p);
                        (h = p.bits),
                            n.part2_3_length <= h ||
                                (n.assign(t),
                                (n.part2_3_length = h),
                                (n.region0_count = i[c - 2]),
                                (n.region1_count = c - 2 - i[c - 2]),
                                (n.table_select[0] = o[c - 2]),
                                (n.table_select[1] = l[c - 2]),
                                (n.table_select[2] = m));
                    }
                }
                (this.noquant_count_bits = function (e, t, n) {
                    var s = t.l3_enc,
                        r = Math.min(
                            576,
                            ((t.max_nonzero_coeff + 2) >> 1) << 1
                        );
                    for (
                        null != n && (n.sfb_count1 = 0);
                        r > 1 && 0 == (s[r - 1] | s[r - 2]);
                        r -= 2
                    );
                    t.count1 = r;
                    for (var i = 0, f = 0; r > 3; r -= 4) {
                        var c;
                        if (
                            (2147483647 &
                                (s[r - 1] | s[r - 2] | s[r - 3] | s[r - 4])) >
                            1
                        )
                            break;
                        (c =
                            2 * (2 * (2 * s[r - 4] + s[r - 3]) + s[r - 2]) +
                            s[r - 1]),
                            (i += l.t32l[c]),
                            (f += l.t33l[c]);
                    }
                    var u = i;
                    if (
                        ((t.count1table_select = 0),
                        i > f && ((u = f), (t.count1table_select = 1)),
                        (t.count1bits = u),
                        (t.big_values = r),
                        0 == r)
                    )
                        return u;
                    if (t.block_type == _.SHORT_TYPE)
                        (i = 3 * e.scalefac_band.s[3]) > t.big_values &&
                            (i = t.big_values),
                            (f = t.big_values);
                    else if (t.block_type == _.NORM_TYPE) {
                        if (
                            (o(r <= 576),
                            (i = t.region0_count = e.bv_scf[r - 2]),
                            (f = t.region1_count = e.bv_scf[r - 1]),
                            o(i + f + 2 < _.SBPSY_l),
                            (f = e.scalefac_band.l[i + f + 2]),
                            (i = e.scalefac_band.l[i + 1]),
                            f < r)
                        ) {
                            var h = new a(u);
                            (t.table_select[2] = b(s, f, r, h)), (u = h.bits);
                        }
                    } else
                        (t.region0_count = 7),
                            (t.region1_count = _.SBMAX_l - 1 - 7 - 1),
                            (i = e.scalefac_band.l[8]) > (f = r) && (i = f);
                    if (
                        ((i = Math.min(i, r)),
                        (f = Math.min(f, r)),
                        o(i >= 0),
                        o(f >= 0),
                        0 < i)
                    ) {
                        h = new a(u);
                        (t.table_select[0] = b(s, 0, i, h)), (u = h.bits);
                    }
                    if (i < f) {
                        h = new a(u);
                        (t.table_select[1] = b(s, i, f, h)), (u = h.bits);
                    }
                    if (
                        (2 == e.use_best_huffman &&
                            ((t.part2_3_length = u),
                            best_huffman_divide(e, t),
                            (u = t.part2_3_length)),
                        null != n && t.block_type == _.NORM_TYPE)
                    ) {
                        for (var p = 0; e.scalefac_band.l[p] < t.big_values; )
                            p++;
                        n.sfb_count1 = p;
                    }
                    return u;
                }),
                    (this.count_bits = function (e, a, n, s) {
                        var i = n.l3_enc,
                            l = c.IXMAX_VAL / t.IPOW20(n.global_gain);
                        if (n.xrpow_max > l) return c.LARGE_BITS;
                        if (
                            ((function (e, a, n, s, i) {
                                var l,
                                    f,
                                    c,
                                    p = 0,
                                    b = 0,
                                    m = 0,
                                    d = 0,
                                    v = a,
                                    g = 0,
                                    S = v,
                                    w = 0,
                                    M = e,
                                    A = 0;
                                for (
                                    c =
                                        null != i &&
                                        s.global_gain == i.global_gain,
                                        f =
                                            s.block_type == _.SHORT_TYPE
                                                ? 38
                                                : 21,
                                        l = 0;
                                    l <= f;
                                    l++
                                ) {
                                    var y = -1;
                                    if (
                                        ((c || s.block_type == _.NORM_TYPE) &&
                                            (y =
                                                s.global_gain -
                                                ((s.scalefac[l] +
                                                    (0 != s.preflag
                                                        ? t.pretab[l]
                                                        : 0)) <<
                                                    (s.scalefac_scale + 1)) -
                                                8 *
                                                    s.subblock_gain[
                                                        s.window[l]
                                                    ]),
                                        o(s.width[l] >= 0),
                                        c && i.step[l] == y)
                                    )
                                        0 != b &&
                                            (h(b, n, M, A, S, w), (b = 0)),
                                            0 != m &&
                                                (u(m, n, M, A, S, w), (m = 0));
                                    else {
                                        var R,
                                            B = s.width[l];
                                        if (
                                            p + s.width[l] >
                                            s.max_nonzero_coeff
                                        )
                                            (R = s.max_nonzero_coeff - p + 1),
                                                r.fill(
                                                    a,
                                                    s.max_nonzero_coeff,
                                                    576,
                                                    0
                                                ),
                                                (B = R) < 0 && (B = 0),
                                                (l = f + 1);
                                        if (
                                            (0 == b &&
                                                0 == m &&
                                                ((S = v),
                                                (w = g),
                                                (M = e),
                                                (A = d)),
                                            null != i &&
                                            i.sfb_count1 > 0 &&
                                            l >= i.sfb_count1 &&
                                            i.step[l] > 0 &&
                                            y >= i.step[l]
                                                ? (0 != b &&
                                                      (h(b, n, M, A, S, w),
                                                      (b = 0),
                                                      (S = v),
                                                      (w = g),
                                                      (M = e),
                                                      (A = d)),
                                                  (m += B))
                                                : (0 != m &&
                                                      (u(m, n, M, A, S, w),
                                                      (m = 0),
                                                      (S = v),
                                                      (w = g),
                                                      (M = e),
                                                      (A = d)),
                                                  (b += B)),
                                            B <= 0)
                                        ) {
                                            0 != m &&
                                                (u(m, n, M, A, S, w), (m = 0)),
                                                0 != b &&
                                                    (h(b, n, M, A, S, w),
                                                    (b = 0));
                                            break;
                                        }
                                    }
                                    l <= f &&
                                        ((g += s.width[l]),
                                        (d += s.width[l]),
                                        (p += s.width[l]));
                                }
                                0 != b && (h(b, n, M, A, S, w), (b = 0)),
                                    0 != m && (u(m, n, M, A, S, w), (m = 0));
                            })(a, i, t.IPOW20(n.global_gain), n, s),
                            0 != (2 & e.substep_shaping))
                        )
                            for (
                                var f = 0,
                                    p = n.global_gain + n.scalefac_scale,
                                    b = 0.634521682242439 / t.IPOW20(p),
                                    m = 0;
                                m < n.sfbmax;
                                m++
                            ) {
                                var d,
                                    v = n.width[m];
                                if ((o(v >= 0), 0 == e.pseudohalf[m])) f += v;
                                else
                                    for (d = f, f += v; d < f; ++d)
                                        i[d] = a[d] >= b ? i[d] : 0;
                            }
                        return this.noquant_count_bits(e, n, s);
                    }),
                    (this.best_huffman_divide = function (e, t) {
                        var n = new f(),
                            s = t.l3_enc,
                            r = i(23),
                            u = i(23),
                            h = i(23),
                            p = i(23);
                        if (t.block_type != _.SHORT_TYPE || 1 != e.mode_gr) {
                            n.assign(t),
                                t.block_type == _.NORM_TYPE &&
                                    (!(function (e, t, n, s, r, i, o) {
                                        for (
                                            var _ = t.big_values, l = 0;
                                            l <= 22;
                                            l++
                                        )
                                            s[l] = c.LARGE_BITS;
                                        for (l = 0; l < 16; l++) {
                                            var f = e.scalefac_band.l[l + 1];
                                            if (f >= _) break;
                                            var u = 0,
                                                h = new a(u),
                                                p = b(n, 0, f, h);
                                            u = h.bits;
                                            for (var m = 0; m < 8; m++) {
                                                var d =
                                                    e.scalefac_band.l[
                                                        l + m + 2
                                                    ];
                                                if (d >= _) break;
                                                var v = u,
                                                    g = b(
                                                        n,
                                                        f,
                                                        d,
                                                        (h = new a(v))
                                                    );
                                                (v = h.bits),
                                                    s[l + m] > v &&
                                                        ((s[l + m] = v),
                                                        (r[l + m] = l),
                                                        (i[l + m] = p),
                                                        (o[l + m] = g));
                                            }
                                        }
                                    })(e, t, s, r, u, h, p),
                                    m(e, n, t, s, r, u, h, p));
                            var d = n.big_values;
                            if (
                                !(
                                    0 == d ||
                                    (s[d - 2] | s[d - 1]) > 1 ||
                                    (d = t.count1 + 2) > 576
                                )
                            ) {
                                n.assign(t), (n.count1 = d);
                                var v = 0,
                                    g = 0;
                                for (o(d <= 576); d > n.big_values; d -= 4) {
                                    var S =
                                        2 *
                                            (2 * (2 * s[d - 4] + s[d - 3]) +
                                                s[d - 2]) +
                                        s[d - 1];
                                    (v += l.t32l[S]), (g += l.t33l[S]);
                                }
                                if (
                                    ((n.big_values = d),
                                    (n.count1table_select = 0),
                                    v > g &&
                                        ((v = g), (n.count1table_select = 1)),
                                    (n.count1bits = v),
                                    n.block_type == _.NORM_TYPE)
                                )
                                    m(e, n, t, s, r, u, h, p);
                                else {
                                    if (
                                        ((n.part2_3_length = v),
                                        (v = e.scalefac_band.l[8]) > d &&
                                            (v = d),
                                        v > 0)
                                    ) {
                                        var w = new a(n.part2_3_length);
                                        (n.table_select[0] = b(s, 0, v, w)),
                                            (n.part2_3_length = w.bits);
                                    }
                                    if (d > v) {
                                        w = new a(n.part2_3_length);
                                        (n.table_select[1] = b(s, v, d, w)),
                                            (n.part2_3_length = w.bits);
                                    }
                                    t.part2_3_length > n.part2_3_length &&
                                        t.assign(n);
                                }
                            }
                        }
                    });
                var d = [1, 1, 1, 1, 8, 2, 2, 2, 4, 4, 4, 8, 8, 8, 16, 16],
                    v = [1, 2, 4, 8, 1, 2, 4, 8, 2, 4, 8, 2, 4, 8, 4, 8],
                    g = [0, 0, 0, 0, 3, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4],
                    S = [0, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 2, 3];
                (e.slen1_tab = g),
                    (e.slen2_tab = S),
                    (this.best_scalefac_store = function (e, a, n, s) {
                        var r,
                            i,
                            f,
                            c,
                            u = s.tt[a][n],
                            h = 0;
                        for (f = 0, r = 0; r < u.sfbmax; r++) {
                            var p = u.width[r];
                            for (
                                o(p >= 0), f += p, c = -p;
                                c < 0 && 0 == u.l3_enc[c + f];
                                c++
                            );
                            0 == c && (u.scalefac[r] = h = -2);
                        }
                        if (0 == u.scalefac_scale && 0 == u.preflag) {
                            var b = 0;
                            for (r = 0; r < u.sfbmax; r++)
                                u.scalefac[r] > 0 && (b |= u.scalefac[r]);
                            if (0 == (1 & b) && 0 != b) {
                                for (r = 0; r < u.sfbmax; r++)
                                    u.scalefac[r] > 0 && (u.scalefac[r] >>= 1);
                                u.scalefac_scale = h = 1;
                            }
                        }
                        if (
                            0 == u.preflag &&
                            u.block_type != _.SHORT_TYPE &&
                            2 == e.mode_gr
                        ) {
                            for (
                                r = 11;
                                r < _.SBPSY_l &&
                                !(
                                    u.scalefac[r] < t.pretab[r] &&
                                    -2 != u.scalefac[r]
                                );
                                r++
                            );
                            if (r == _.SBPSY_l) {
                                for (r = 11; r < _.SBPSY_l; r++)
                                    u.scalefac[r] > 0 &&
                                        (u.scalefac[r] -= t.pretab[r]);
                                u.preflag = h = 1;
                            }
                        }
                        for (i = 0; i < 4; i++) s.scfsi[n][i] = 0;
                        for (
                            2 == e.mode_gr &&
                                1 == a &&
                                s.tt[0][n].block_type != _.SHORT_TYPE &&
                                s.tt[1][n].block_type != _.SHORT_TYPE &&
                                (!(function (e, t) {
                                    for (
                                        var a,
                                            n = t.tt[1][e],
                                            s = t.tt[0][e],
                                            r = 0;
                                        r < l.scfsi_band.length - 1;
                                        r++
                                    ) {
                                        for (
                                            a = l.scfsi_band[r];
                                            a < l.scfsi_band[r + 1] &&
                                            !(
                                                s.scalefac[a] !=
                                                    n.scalefac[a] &&
                                                n.scalefac[a] >= 0
                                            );
                                            a++
                                        );
                                        if (a == l.scfsi_band[r + 1]) {
                                            for (
                                                a = l.scfsi_band[r];
                                                a < l.scfsi_band[r + 1];
                                                a++
                                            )
                                                n.scalefac[a] = -1;
                                            t.scfsi[e][r] = 1;
                                        }
                                    }
                                    var i = 0,
                                        o = 0;
                                    for (a = 0; a < 11; a++)
                                        -1 != n.scalefac[a] &&
                                            (o++,
                                            i < n.scalefac[a] &&
                                                (i = n.scalefac[a]));
                                    for (var f = 0, c = 0; a < _.SBPSY_l; a++)
                                        -1 != n.scalefac[a] &&
                                            (c++,
                                            f < n.scalefac[a] &&
                                                (f = n.scalefac[a]));
                                    for (r = 0; r < 16; r++)
                                        if (i < d[r] && f < v[r]) {
                                            var u = g[r] * o + S[r] * c;
                                            n.part2_length > u &&
                                                ((n.part2_length = u),
                                                (n.scalefac_compress = r));
                                        }
                                })(n, s),
                                (h = 0)),
                                r = 0;
                            r < u.sfbmax;
                            r++
                        )
                            -2 == u.scalefac[r] && (u.scalefac[r] = 0);
                        0 != h &&
                            (2 == e.mode_gr
                                ? this.scale_bitcount(u)
                                : this.scale_bitcount_lsf(e, u));
                    });
                var w = [
                        0, 18, 36, 54, 54, 36, 54, 72, 54, 72, 90, 72, 90, 108,
                        108, 126,
                    ],
                    M = [
                        0, 18, 36, 54, 51, 35, 53, 71, 52, 70, 88, 69, 87, 105,
                        104, 122,
                    ],
                    A = [
                        0, 10, 20, 30, 33, 21, 31, 41, 32, 42, 52, 43, 53, 63,
                        64, 74,
                    ];
                this.scale_bitcount = function (e) {
                    var a,
                        n,
                        s,
                        r = 0,
                        i = 0,
                        l = e.scalefac;
                    if (
                        (o(
                            (function (e, t) {
                                for (var a = 0; a < t; ++a)
                                    if (e[a] < 0) return !1;
                                return !0;
                            })(l, e.sfbmax)
                        ),
                        e.block_type == _.SHORT_TYPE)
                    )
                        (s = w), 0 != e.mixed_block_flag && (s = M);
                    else if (((s = A), 0 == e.preflag)) {
                        for (
                            n = 11;
                            n < _.SBPSY_l && !(l[n] < t.pretab[n]);
                            n++
                        );
                        if (n == _.SBPSY_l)
                            for (e.preflag = 1, n = 11; n < _.SBPSY_l; n++)
                                l[n] -= t.pretab[n];
                    }
                    for (n = 0; n < e.sfbdivide; n++) r < l[n] && (r = l[n]);
                    for (; n < e.sfbmax; n++) i < l[n] && (i = l[n]);
                    for (e.part2_length = c.LARGE_BITS, a = 0; a < 16; a++)
                        r < d[a] &&
                            i < v[a] &&
                            e.part2_length > s[a] &&
                            ((e.part2_length = s[a]),
                            (e.scalefac_compress = a));
                    return e.part2_length == c.LARGE_BITS;
                };
                var y = [
                    [15, 15, 7, 7],
                    [15, 15, 7, 0],
                    [7, 3, 0, 0],
                    [15, 31, 31, 0],
                    [7, 7, 7, 0],
                    [3, 3, 0, 0],
                ];
                this.scale_bitcount_lsf = function (e, a) {
                    var n,
                        r,
                        l,
                        f,
                        c,
                        u,
                        h,
                        p,
                        b = i(4),
                        m = a.scalefac;
                    for (n = 0 != a.preflag ? 2 : 0, h = 0; h < 4; h++)
                        b[h] = 0;
                    if (a.block_type == _.SHORT_TYPE) {
                        r = 1;
                        var d = t.nr_of_sfb_block[n][r];
                        for (p = 0, l = 0; l < 4; l++)
                            for (f = d[l] / 3, h = 0; h < f; h++, p++)
                                for (c = 0; c < 3; c++)
                                    m[3 * p + c] > b[l] &&
                                        (b[l] = m[3 * p + c]);
                    } else {
                        r = 0;
                        d = t.nr_of_sfb_block[n][r];
                        for (p = 0, l = 0; l < 4; l++)
                            for (f = d[l], h = 0; h < f; h++, p++)
                                m[p] > b[l] && (b[l] = m[p]);
                    }
                    for (u = !1, l = 0; l < 4; l++) b[l] > y[n][l] && (u = !0);
                    if (!u) {
                        var v, g, S, w;
                        for (
                            a.sfb_partition_table = t.nr_of_sfb_block[n][r],
                                l = 0;
                            l < 4;
                            l++
                        )
                            a.slen[l] = R[b[l]];
                        switch (
                            ((v = a.slen[0]),
                            (g = a.slen[1]),
                            (S = a.slen[2]),
                            (w = a.slen[3]),
                            n)
                        ) {
                            case 0:
                                a.scalefac_compress =
                                    ((5 * v + g) << 4) + (S << 2) + w;
                                break;
                            case 1:
                                a.scalefac_compress =
                                    400 + ((5 * v + g) << 2) + S;
                                break;
                            case 2:
                                a.scalefac_compress = 500 + 3 * v + g;
                                break;
                            default:
                                s.err.printf(
                                    "intensity stereo not implemented yet\n"
                                );
                        }
                    }
                    if (!u)
                        for (
                            o(null != a.sfb_partition_table),
                                a.part2_length = 0,
                                l = 0;
                            l < 4;
                            l++
                        )
                            a.part2_length +=
                                a.slen[l] * a.sfb_partition_table[l];
                    return u;
                };
                var R = [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4];
                this.huffman_init = function (e) {
                    for (var t = 2; t <= 576; t += 2) {
                        for (var a, s = 0; e.scalefac_band.l[++s] < t; );
                        for (a = n[s][0]; e.scalefac_band.l[a + 1] > t; ) a--;
                        for (
                            a < 0 && (a = n[s][0]),
                                e.bv_scf[t - 2] = a,
                                a = n[s][1];
                            e.scalefac_band.l[a + e.bv_scf[t - 2] + 2] > t;

                        )
                            a--;
                        a < 0 && (a = n[s][1]), (e.bv_scf[t - 1] = a);
                    }
                };
            };
        },
        function (e, t, a) {
            var n = a(12),
                s = a(0),
                r = (s.System, s.VbrMode),
                i = s.Float,
                o = (s.ShortBlock, s.Util),
                _ =
                    (s.Arrays,
                    s.new_array_n,
                    s.new_byte,
                    s.new_double,
                    s.new_float),
                l = (s.new_float_n, s.new_int),
                f = (s.new_int_n, s.assert),
                c = a(1),
                u = a(14),
                h = a(3);
            function p() {
                var e = a(7),
                    t = null,
                    s = null,
                    b = null;
                (this.setModules = function (e, a, n) {
                    (t = e), (s = a), (b = n);
                }),
                    (this.IPOW20 = function (e) {
                        return f(0 <= e && e < p.Q_MAX), w[e];
                    });
                var m = p.IXMAX_VAL + 2,
                    d = p.Q_MAX,
                    v = p.Q_MAX2;
                p.LARGE_BITS;
                this.nr_of_sfb_block = [
                    [
                        [6, 5, 5, 5],
                        [9, 9, 9, 9],
                        [6, 9, 9, 9],
                    ],
                    [
                        [6, 5, 7, 3],
                        [9, 9, 12, 6],
                        [6, 9, 12, 6],
                    ],
                    [
                        [11, 10, 0, 0],
                        [18, 18, 0, 0],
                        [15, 18, 0, 0],
                    ],
                    [
                        [7, 7, 7, 0],
                        [12, 12, 12, 0],
                        [6, 15, 12, 0],
                    ],
                    [
                        [6, 6, 6, 3],
                        [12, 9, 9, 6],
                        [6, 12, 9, 6],
                    ],
                    [
                        [8, 8, 5, 0],
                        [15, 12, 9, 0],
                        [6, 18, 9, 0],
                    ],
                ];
                var g = [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 3,
                    2, 0,
                ];
                (this.pretab = g),
                    (this.sfBandIndex = [
                        new n(
                            [
                                0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96,
                                116, 140, 168, 200, 238, 284, 336, 396, 464,
                                522, 576,
                            ],
                            [
                                0, 4, 8, 12, 18, 24, 32, 42, 56, 74, 100, 132,
                                174, 192,
                            ],
                            [0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0]
                        ),
                        new n(
                            [
                                0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96,
                                114, 136, 162, 194, 232, 278, 332, 394, 464,
                                540, 576,
                            ],
                            [
                                0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 136,
                                180, 192,
                            ],
                            [0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0]
                        ),
                        new n(
                            [
                                0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96,
                                116, 140, 168, 200, 238, 284, 336, 396, 464,
                                522, 576,
                            ],
                            [
                                0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 134,
                                174, 192,
                            ],
                            [0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0]
                        ),
                        new n(
                            [
                                0, 4, 8, 12, 16, 20, 24, 30, 36, 44, 52, 62, 74,
                                90, 110, 134, 162, 196, 238, 288, 342, 418, 576,
                            ],
                            [
                                0, 4, 8, 12, 16, 22, 30, 40, 52, 66, 84, 106,
                                136, 192,
                            ],
                            [0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0]
                        ),
                        new n(
                            [
                                0, 4, 8, 12, 16, 20, 24, 30, 36, 42, 50, 60, 72,
                                88, 106, 128, 156, 190, 230, 276, 330, 384, 576,
                            ],
                            [
                                0, 4, 8, 12, 16, 22, 28, 38, 50, 64, 80, 100,
                                126, 192,
                            ],
                            [0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0]
                        ),
                        new n(
                            [
                                0, 4, 8, 12, 16, 20, 24, 30, 36, 44, 54, 66, 82,
                                102, 126, 156, 194, 240, 296, 364, 448, 550,
                                576,
                            ],
                            [
                                0, 4, 8, 12, 16, 22, 30, 42, 58, 78, 104, 138,
                                180, 192,
                            ],
                            [0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0]
                        ),
                        new n(
                            [
                                0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96,
                                116, 140, 168, 200, 238, 284, 336, 396, 464,
                                522, 576,
                            ],
                            [
                                0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 134,
                                174, 192,
                            ],
                            [0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0]
                        ),
                        new n(
                            [
                                0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96,
                                116, 140, 168, 200, 238, 284, 336, 396, 464,
                                522, 576,
                            ],
                            [
                                0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 134,
                                174, 192,
                            ],
                            [0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0]
                        ),
                        new n(
                            [
                                0, 12, 24, 36, 48, 60, 72, 88, 108, 132, 160,
                                192, 232, 280, 336, 400, 476, 566, 568, 570,
                                572, 574, 576,
                            ],
                            [
                                0, 8, 16, 24, 36, 52, 72, 96, 124, 160, 162,
                                164, 166, 192,
                            ],
                            [0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0]
                        ),
                    ]);
                var S = _(d + v + 1),
                    w = _(d),
                    M = _(m),
                    A = _(m);
                function y(e, t) {
                    var a = b.ATHformula(t, e);
                    return (a -= 100), (a = Math.pow(10, a / 10 + e.ATHlower));
                }
                function R(e) {
                    this.s = e;
                }
                (this.adj43 = A),
                    (this.iteration_init = function (e) {
                        var a,
                            n = e.internal_flags,
                            s = n.l3_side;
                        if (0 == n.iteration_init_init) {
                            for (
                                n.iteration_init_init = 1,
                                    s.main_data_begin = 0,
                                    (function (e) {
                                        for (
                                            var t = e.internal_flags.ATH.l,
                                                a = e.internal_flags.ATH.psfb21,
                                                n = e.internal_flags.ATH.s,
                                                s = e.internal_flags.ATH.psfb12,
                                                r = e.internal_flags,
                                                o = e.out_samplerate,
                                                _ = 0;
                                            _ < c.SBMAX_l;
                                            _++
                                        ) {
                                            var l = r.scalefac_band.l[_],
                                                f = r.scalefac_band.l[_ + 1];
                                            t[_] = i.MAX_VALUE;
                                            for (var u = l; u < f; u++) {
                                                var h = y(e, (u * o) / 1152);
                                                t[_] = Math.min(t[_], h);
                                            }
                                        }
                                        for (_ = 0; _ < c.PSFB21; _++) {
                                            (l = r.scalefac_band.psfb21[_]),
                                                (f =
                                                    r.scalefac_band.psfb21[
                                                        _ + 1
                                                    ]);
                                            a[_] = i.MAX_VALUE;
                                            for (u = l; u < f; u++) {
                                                h = y(e, (u * o) / 1152);
                                                a[_] = Math.min(a[_], h);
                                            }
                                        }
                                        for (_ = 0; _ < c.SBMAX_s; _++) {
                                            (l = r.scalefac_band.s[_]),
                                                (f = r.scalefac_band.s[_ + 1]);
                                            n[_] = i.MAX_VALUE;
                                            for (u = l; u < f; u++) {
                                                h = y(e, (u * o) / 384);
                                                n[_] = Math.min(n[_], h);
                                            }
                                            n[_] *=
                                                r.scalefac_band.s[_ + 1] -
                                                r.scalefac_band.s[_];
                                        }
                                        for (_ = 0; _ < c.PSFB12; _++) {
                                            (l = r.scalefac_band.psfb12[_]),
                                                (f =
                                                    r.scalefac_band.psfb12[
                                                        _ + 1
                                                    ]);
                                            s[_] = i.MAX_VALUE;
                                            for (u = l; u < f; u++) {
                                                h = y(e, (u * o) / 384);
                                                s[_] = Math.min(s[_], h);
                                            }
                                            s[_] *=
                                                r.scalefac_band.s[13] -
                                                r.scalefac_band.s[12];
                                        }
                                        if (e.noATH) {
                                            for (_ = 0; _ < c.SBMAX_l; _++)
                                                t[_] = 1e-20;
                                            for (_ = 0; _ < c.PSFB21; _++)
                                                a[_] = 1e-20;
                                            for (_ = 0; _ < c.SBMAX_s; _++)
                                                n[_] = 1e-20;
                                            for (_ = 0; _ < c.PSFB12; _++)
                                                s[_] = 1e-20;
                                        }
                                        r.ATH.floor = 10 * Math.log10(y(e, -1));
                                    })(e),
                                    M[0] = 0,
                                    a = 1;
                                a < m;
                                a++
                            )
                                M[a] = Math.pow(a, 4 / 3);
                            for (a = 0; a < m - 1; a++)
                                A[a] =
                                    a +
                                    1 -
                                    Math.pow(0.5 * (M[a] + M[a + 1]), 0.75);
                            for (A[a] = 0.5, a = 0; a < d; a++)
                                w[a] = Math.pow(2, -0.1875 * (a - 210));
                            for (a = 0; a <= d + v; a++)
                                S[a] = Math.pow(2, 0.25 * (a - 210 - v));
                            var r, o, _, l;
                            for (
                                t.huffman_init(n),
                                    (a = (e.exp_nspsytune >> 2) & 63) >= 32 &&
                                        (a -= 64),
                                    r = Math.pow(10, a / 4 / 10),
                                    (a = (e.exp_nspsytune >> 8) & 63) >= 32 &&
                                        (a -= 64),
                                    o = Math.pow(10, a / 4 / 10),
                                    (a = (e.exp_nspsytune >> 14) & 63) >= 32 &&
                                        (a -= 64),
                                    _ = Math.pow(10, a / 4 / 10),
                                    (a = (e.exp_nspsytune >> 20) & 63) >= 32 &&
                                        (a -= 64),
                                    l = _ * Math.pow(10, a / 4 / 10),
                                    a = 0;
                                a < c.SBMAX_l;
                                a++
                            ) {
                                (f =
                                    a <= 6 ? r : a <= 13 ? o : a <= 20 ? _ : l),
                                    (n.nsPsy.longfact[a] = f);
                            }
                            for (a = 0; a < c.SBMAX_s; a++) {
                                var f;
                                (f =
                                    a <= 5 ? r : a <= 10 ? o : a <= 11 ? _ : l),
                                    (n.nsPsy.shortfact[a] = f);
                            }
                        }
                    }),
                    (this.on_pe = function (e, t, a, n, r, i) {
                        var o,
                            _,
                            c = e.internal_flags,
                            p = 0,
                            b = l(2),
                            m = new u(p),
                            d = s.ResvMaxBits(e, n, m, i),
                            v = (p = m.bits) + d;
                        for (
                            v > h.MAX_BITS_PER_GRANULE &&
                                (v = h.MAX_BITS_PER_GRANULE),
                                o = 0,
                                _ = 0;
                            _ < c.channels_out;
                            ++_
                        )
                            (a[_] = Math.min(
                                h.MAX_BITS_PER_CHANNEL,
                                p / c.channels_out
                            )),
                                (b[_] = 0 | ((a[_] * t[r][_]) / 700 - a[_])),
                                b[_] > (3 * n) / 4 && (b[_] = (3 * n) / 4),
                                b[_] < 0 && (b[_] = 0),
                                b[_] + a[_] > h.MAX_BITS_PER_CHANNEL &&
                                    (b[_] = Math.max(
                                        0,
                                        h.MAX_BITS_PER_CHANNEL - a[_]
                                    )),
                                (o += b[_]);
                        if (o > d)
                            for (_ = 0; _ < c.channels_out; ++_)
                                b[_] = (d * b[_]) / o;
                        for (_ = 0; _ < c.channels_out; ++_)
                            (a[_] += b[_]), (d -= b[_]);
                        for (o = 0, _ = 0; _ < c.channels_out; ++_) o += a[_];
                        if (o > h.MAX_BITS_PER_GRANULE) {
                            var g = 0;
                            for (_ = 0; _ < c.channels_out; ++_)
                                (a[_] *= h.MAX_BITS_PER_GRANULE),
                                    (a[_] /= o),
                                    (g += a[_]);
                            f(g <= h.MAX_BITS_PER_GRANULE);
                        }
                        return v;
                    }),
                    (this.reduce_side = function (e, t, a, n) {
                        f(n <= h.MAX_BITS_PER_GRANULE),
                            f(e[0] + e[1] <= h.MAX_BITS_PER_GRANULE);
                        var s = (0.33 * (0.5 - t)) / 0.5;
                        s < 0 && (s = 0), s > 0.5 && (s = 0.5);
                        var r = 0 | (0.5 * s * (e[0] + e[1]));
                        r > h.MAX_BITS_PER_CHANNEL - e[0] &&
                            (r = h.MAX_BITS_PER_CHANNEL - e[0]),
                            r < 0 && (r = 0),
                            e[1] >= 125 &&
                                (e[1] - r > 125
                                    ? (e[0] < a && (e[0] += r), (e[1] -= r))
                                    : ((e[0] += e[1] - 125), (e[1] = 125))),
                            (r = e[0] + e[1]) > n &&
                                ((e[0] = (n * e[0]) / r),
                                (e[1] = (n * e[1]) / r)),
                            f(e[0] <= h.MAX_BITS_PER_CHANNEL),
                            f(e[1] <= h.MAX_BITS_PER_CHANNEL),
                            f(e[0] + e[1] <= h.MAX_BITS_PER_GRANULE);
                    }),
                    (this.athAdjust = function (e, t, a) {
                        var n = 90.30873362,
                            s = o.FAST_LOG10_X(t, 10),
                            r = e * e,
                            i = 0;
                        return (
                            (s -= a),
                            r > 1e-20 && (i = 1 + o.FAST_LOG10_X(r, 10 / n)),
                            i < 0 && (i = 0),
                            (s *= i),
                            (s += a + n - 94.82444863),
                            Math.pow(10, 0.1 * s)
                        );
                    }),
                    (this.calc_xmin = function (t, a, n, s) {
                        var i,
                            o = 0,
                            _ = t.internal_flags,
                            l = 0,
                            f = 0,
                            u = _.ATH,
                            h = n.xr,
                            p = t.VBR == r.vbr_mtrh ? 1 : 0,
                            b = _.masking_lower;
                        for (
                            (t.VBR != r.vbr_mtrh && t.VBR != r.vbr_mt) ||
                                (b = 1),
                                i = 0;
                            i < n.psy_lmax;
                            i++
                        ) {
                            (A =
                                (M =
                                    t.VBR == r.vbr_rh || t.VBR == r.vbr_mtrh
                                        ? athAdjust(u.adjust, u.l[i], u.floor)
                                        : u.adjust * u.l[i]) /
                                (g = n.width[i])),
                                (y = 2220446049250313e-31),
                                (T = g >> 1),
                                (E = 0);
                            do {
                                (E += x = h[l] * h[l]),
                                    (y += x < A ? x : A),
                                    (E += k = h[++l] * h[l]),
                                    (y += k < A ? k : A),
                                    l++;
                            } while (--T > 0);
                            if ((E > M && f++, i == c.SBPSY_l))
                                y < (B = M * _.nsPsy.longfact[i]) && (y = B);
                            if ((0 != p && (M = y), !t.ATHonly))
                                if ((R = a.en.l[i]) > 0)
                                    (B = (E * a.thm.l[i] * b) / R),
                                        0 != p && (B *= _.nsPsy.longfact[i]),
                                        M < B && (M = B);
                            s[o++] = 0 != p ? M : M * _.nsPsy.longfact[i];
                        }
                        var m = 575;
                        if (n.block_type != c.SHORT_TYPE)
                            for (var d = 576; 0 != d-- && e.EQ(h[d], 0); )
                                m = d;
                        n.max_nonzero_coeff = m;
                        for (var v = n.sfb_smin; i < n.psymax; v++, i += 3) {
                            var g, S, w;
                            for (
                                w =
                                    t.VBR == r.vbr_rh || t.VBR == r.vbr_mtrh
                                        ? athAdjust(u.adjust, u.s[v], u.floor)
                                        : u.adjust * u.s[v],
                                    g = n.width[i],
                                    S = 0;
                                S < 3;
                                S++
                            ) {
                                var M,
                                    A,
                                    y,
                                    R,
                                    B,
                                    E = 0,
                                    T = g >> 1;
                                (A = w / g), (y = 2220446049250313e-31);
                                do {
                                    var x, k;
                                    (E += x = h[l] * h[l]),
                                        (y += x < A ? x : A),
                                        (E += k = h[++l] * h[l]),
                                        (y += k < A ? k : A),
                                        l++;
                                } while (--T > 0);
                                if ((E > w && f++, v == c.SBPSY_s))
                                    y < (B = w * _.nsPsy.shortfact[v]) &&
                                        (y = B);
                                if (
                                    ((M = 0 != p ? y : w),
                                    !t.ATHonly && !t.ATHshort)
                                )
                                    if ((R = a.en.s[v][S]) > 0)
                                        (B = (E * a.thm.s[v][S] * b) / R),
                                            0 != p &&
                                                (B *= _.nsPsy.shortfact[v]),
                                            M < B && (M = B);
                                s[o++] = 0 != p ? M : M * _.nsPsy.shortfact[v];
                            }
                            t.useTemporal &&
                                (s[o - 3] > s[o - 3 + 1] &&
                                    (s[o - 3 + 1] +=
                                        (s[o - 3] - s[o - 3 + 1]) * _.decay),
                                s[o - 3 + 1] > s[o - 3 + 2] &&
                                    (s[o - 3 + 2] +=
                                        (s[o - 3 + 1] - s[o - 3 + 2]) *
                                        _.decay));
                        }
                        return f;
                    }),
                    (this.calc_noise_core = function (e, t, a, n) {
                        var s = 0,
                            r = t.s,
                            i = e.l3_enc;
                        if (r > e.count1)
                            for (; 0 != a--; ) {
                                (l = e.xr[r]),
                                    r++,
                                    (s += l * l),
                                    (l = e.xr[r]),
                                    r++,
                                    (s += l * l);
                            }
                        else if (r > e.big_values) {
                            var o = _(2);
                            for (o[0] = 0, o[1] = n; 0 != a--; ) {
                                (l = Math.abs(e.xr[r]) - o[i[r]]),
                                    r++,
                                    (s += l * l),
                                    (l = Math.abs(e.xr[r]) - o[i[r]]),
                                    r++,
                                    (s += l * l);
                            }
                        } else
                            for (; 0 != a--; ) {
                                var l;
                                (l = Math.abs(e.xr[r]) - M[i[r]] * n),
                                    r++,
                                    (s += l * l),
                                    (l = Math.abs(e.xr[r]) - M[i[r]] * n),
                                    r++,
                                    (s += l * l);
                            }
                        return (t.s = r), s;
                    }),
                    (this.calc_noise = function (e, t, a, n, s) {
                        var r,
                            i,
                            _,
                            l = 0,
                            c = 0,
                            u = 0,
                            h = 0,
                            b = 0,
                            m = -20,
                            d = 0,
                            v = e.scalefac,
                            w = 0;
                        for (n.over_SSD = 0, r = 0; r < e.psymax; r++) {
                            var M,
                                A =
                                    e.global_gain -
                                    ((v[w++] + (0 != e.preflag ? g[r] : 0)) <<
                                        (e.scalefac_scale + 1)) -
                                    8 * e.subblock_gain[e.window[r]],
                                y = 0;
                            if (null != s && s.step[r] == A)
                                (y = s.noise[r]),
                                    (d += e.width[r]),
                                    (a[l++] = y / t[c++]),
                                    (y = s.noise_log[r]);
                            else {
                                var B,
                                    E =
                                        (f(
                                            0 <= (_ = A) + p.Q_MAX2 &&
                                                _ < p.Q_MAX
                                        ),
                                        S[_ + p.Q_MAX2]);
                                if (
                                    ((i = e.width[r] >> 1),
                                    d + e.width[r] > e.max_nonzero_coeff)
                                )
                                    i =
                                        (B = e.max_nonzero_coeff - d + 1) > 0
                                            ? B >> 1
                                            : 0;
                                var T = new R(d);
                                (y = this.calc_noise_core(e, T, i, E)),
                                    (d = T.s),
                                    null != s &&
                                        ((s.step[r] = A), (s.noise[r] = y)),
                                    (y = a[l++] = y / t[c++]),
                                    (y = o.FAST_LOG10(Math.max(y, 1e-20))),
                                    null != s && (s.noise_log[r] = y);
                            }
                            if (
                                (null != s && (s.global_gain = e.global_gain),
                                (b += y),
                                y > 0)
                            )
                                (M = Math.max(0 | (10 * y + 0.5), 1)),
                                    (n.over_SSD += M * M),
                                    u++,
                                    (h += y);
                            m = Math.max(m, y);
                        }
                        return (
                            (n.over_count = u),
                            (n.tot_noise = b),
                            (n.over_noise = h),
                            (n.max_noise = m),
                            u
                        );
                    }),
                    (this.set_pinfo = function (e, t, a, n, s) {
                        var r,
                            i,
                            o,
                            l,
                            u,
                            h = e.internal_flags,
                            p = 0 == t.scalefac_scale ? 0.5 : 1,
                            b = t.scalefac,
                            m = _(L3Side.SFBMAX),
                            d = _(L3Side.SFBMAX),
                            v = new CalcNoiseResult();
                        calc_xmin(e, a, t, m), calc_noise(t, m, d, v, null);
                        var S = 0;
                        for (
                            i = t.sfb_lmax,
                                t.block_type != c.SHORT_TYPE &&
                                    0 == t.mixed_block_flag &&
                                    (i = 22),
                                r = 0;
                            r < i;
                            r++
                        ) {
                            var w = h.scalefac_band.l[r],
                                M = (A = h.scalefac_band.l[r + 1]) - w;
                            for (l = 0; S < A; S++) l += t.xr[S] * t.xr[S];
                            (l /= M),
                                (u = 1e15),
                                (h.pinfo.en[n][s][r] = u * l),
                                (h.pinfo.xfsf[n][s][r] = (u * m[r] * d[r]) / M),
                                a.en.l[r] > 0 && !e.ATHonly
                                    ? (l /= a.en.l[r])
                                    : (l = 0),
                                (h.pinfo.thr[n][s][r] =
                                    u * Math.max(l * a.thm.l[r], h.ATH.l[r])),
                                (h.pinfo.LAMEsfb[n][s][r] = 0),
                                0 != t.preflag &&
                                    r >= 11 &&
                                    (h.pinfo.LAMEsfb[n][s][r] = -p * g[r]),
                                r < c.SBPSY_l &&
                                    (f(b[r] >= 0),
                                    (h.pinfo.LAMEsfb[n][s][r] -= p * b[r]));
                        }
                        if (t.block_type == c.SHORT_TYPE)
                            for (i = r, r = t.sfb_smin; r < c.SBMAX_s; r++) {
                                (w = h.scalefac_band.s[r]),
                                    (M = (A = h.scalefac_band.s[r + 1]) - w);
                                for (var A, y = 0; y < 3; y++) {
                                    for (l = 0, o = w; o < A; o++)
                                        (l += t.xr[S] * t.xr[S]), S++;
                                    (l = Math.max(l / M, 1e-20)),
                                        (u = 1e15),
                                        (h.pinfo.en_s[n][s][3 * r + y] = u * l),
                                        (h.pinfo.xfsf_s[n][s][3 * r + y] =
                                            (u * m[i] * d[i]) / M),
                                        a.en.s[r][y] > 0
                                            ? (l /= a.en.s[r][y])
                                            : (l = 0),
                                        (e.ATHonly || e.ATHshort) && (l = 0),
                                        (h.pinfo.thr_s[n][s][3 * r + y] =
                                            u *
                                            Math.max(
                                                l * a.thm.s[r][y],
                                                h.ATH.s[r]
                                            )),
                                        (h.pinfo.LAMEsfb_s[n][s][3 * r + y] =
                                            -2 * t.subblock_gain[y]),
                                        r < c.SBPSY_s &&
                                            (h.pinfo.LAMEsfb_s[n][s][
                                                3 * r + y
                                            ] -= p * b[i]),
                                        i++;
                                }
                            }
                        (h.pinfo.LAMEqss[n][s] = t.global_gain),
                            (h.pinfo.LAMEmainbits[n][s] =
                                t.part2_3_length + t.part2_length),
                            (h.pinfo.LAMEsfbits[n][s] = t.part2_length),
                            (h.pinfo.over[n][s] = v.over_count),
                            (h.pinfo.max_noise[n][s] = 10 * v.max_noise),
                            (h.pinfo.over_noise[n][s] = 10 * v.over_noise),
                            (h.pinfo.tot_noise[n][s] = 10 * v.tot_noise),
                            (h.pinfo.over_SSD[n][s] = v.over_SSD);
                    });
            }
            (p.Q_MAX = 257),
                (p.Q_MAX2 = 116),
                (p.LARGE_BITS = 1e5),
                (p.IXMAX_VAL = 8206),
                (e.exports = p);
        },
        function (e, t, a) {
            "use strict";
            var n,
                s =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                        return (n =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var a in t)
                                    t.hasOwnProperty(a) && (e[a] = t[a]);
                            })(e, t);
                    }),
                    function (e, t) {
                        function a() {
                            this.constructor = e;
                        }
                        n(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((a.prototype = t.prototype), new a()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = a(18),
                i = a(9),
                o = a(38),
                _ = (function (e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var a = e.call(this, t) || this;
                        return (
                            (a.isrecording = !1),
                            (a.ispause = !1),
                            (a.isplaying = !1),
                            a
                        );
                    }
                    return (
                        s(t, e),
                        (t.prototype.setOption = function (e) {
                            void 0 === e && (e = {}), this.setNewOption(e);
                        }),
                        (t.prototype.start = function () {
                            return this.isrecording
                                ? Promise.reject()
                                : ((this.isrecording = !0), this.startRecord());
                        }),
                        (t.prototype.pause = function () {
                            this.isrecording &&
                                !this.ispause &&
                                ((this.ispause = !0), this.pauseRecord());
                        }),
                        (t.prototype.resume = function () {
                            this.isrecording &&
                                this.ispause &&
                                ((this.ispause = !1), this.resumeRecord());
                        }),
                        (t.prototype.stop = function () {
                            this.isrecording &&
                                ((this.isrecording = !1),
                                (this.ispause = !1),
                                this.stopRecord());
                        }),
                        (t.prototype.play = function () {
                            this.stop(),
                                (this.isplaying = !0),
                                this.onplay && this.onplay(),
                                o.default.addPlayEnd(this.onplayend);
                            var e = this.getWAV();
                            e.byteLength > 44 && o.default.play(e.buffer);
                        }),
                        (t.prototype.getPlayTime = function () {
                            return o.default.getPlayTime();
                        }),
                        (t.prototype.pausePlay = function () {
                            !this.isrecording &&
                                this.isplaying &&
                                ((this.isplaying = !1),
                                this.onpauseplay && this.onpauseplay(),
                                o.default.pausePlay());
                        }),
                        (t.prototype.resumePlay = function () {
                            this.isrecording ||
                                this.isplaying ||
                                ((this.isplaying = !0),
                                this.onresumeplay && this.onresumeplay(),
                                o.default.resumePlay());
                        }),
                        (t.prototype.stopPlay = function () {
                            this.isrecording ||
                                ((this.isplaying = !1),
                                this.onstopplay && this.onstopplay(),
                                o.default.stopPlay());
                        }),
                        (t.prototype.destroy = function () {
                            return (
                                o.default.destroyPlay(), this.destroyRecord()
                            );
                        }),
                        (t.prototype.getRecordAnalyseData = function () {
                            return this.getAnalyseData();
                        }),
                        (t.prototype.getPlayAnalyseData = function () {
                            return o.default.getAnalyseData();
                        }),
                        (t.prototype.getPCM = function () {
                            if ((this.stop(), this.getEncodedPCM()))
                                return this.getEncodedPCM();
                            var e = this.getData();
                            return (
                                (e = i.compress(
                                    e,
                                    this.inputSampleRate,
                                    this.outputSampleRate
                                )),
                                i.encodePCM(
                                    e,
                                    this.oututSampleBits,
                                    this.littleEdian
                                )
                            );
                        }),
                        (t.prototype.getPCMBlob = function () {
                            return new Blob([this.getPCM()]);
                        }),
                        (t.prototype.downloadPCM = function (e) {
                            void 0 === e && (e = "recorder");
                            var t = this.getPCMBlob();
                            r.downloadPCM(t, e);
                        }),
                        (t.prototype.getWAV = function () {
                            var e = this.getPCM();
                            return i.encodeWAV(
                                e,
                                this.inputSampleRate,
                                this.outputSampleRate,
                                this.config.numChannels,
                                this.oututSampleBits,
                                this.littleEdian
                            );
                        }),
                        (t.prototype.getWAVBlob = function () {
                            return new Blob([this.getWAV()], {
                                type: "audio/wav",
                            });
                        }),
                        (t.prototype.downloadWAV = function (e) {
                            void 0 === e && (e = "recorder");
                            var t = this.getWAVBlob();
                            r.downloadWAV(t, e);
                        }),
                        (t.prototype.getMP3 = function () {
                            var e = this.getChannelData();
                            return i.encodeMP3(
                                e,
                                this.inputSampleRate,
                                this.outputSampleRate,
                                this.config.numChannels,
                                this.oututSampleBits,
                                this.littleEdian
                            );
                        }),
                        (t.prototype.getMP3Blob = function () {
                            return new Blob(this.getMP3(), {
                                type: "audio/mp3",
                            });
                        }),
                        (t.prototype.downloadMP3 = function (e) {
                            void 0 === e && (e = "recorder");
                            var t = this.getMP3Blob();
                            r.download(t, e, "mp3");
                        }),
                        (t.prototype.download = function (e, t, a) {
                            r.download(e, t, a);
                        }),
                        (t.prototype.getChannelData = function () {
                            var e = this.getPCM(),
                                t = e.byteLength,
                                a = this.littleEdian,
                                n = { left: null, right: null };
                            if (2 === this.config.numChannels) {
                                var s = new DataView(new ArrayBuffer(t / 2)),
                                    r = new DataView(new ArrayBuffer(t / 2));
                                if (16 === this.config.sampleBits)
                                    for (var i = 0; i < t / 2; i += 2)
                                        s.setInt16(i, e.getInt16(2 * i, a), a),
                                            r.setInt16(
                                                i,
                                                e.getInt16(2 * i + 2, a),
                                                a
                                            );
                                else
                                    for (i = 0; i < t / 2; i += 2)
                                        s.setInt8(i, e.getInt8(2 * i)),
                                            r.setInt8(i, e.getInt8(2 * i + 1));
                                (n.left = s), (n.right = r);
                            } else n.left = e;
                            return n;
                        }),
                        t
                    );
                })(a(40).default);
            t.default = _;
        },
        function (e, t, a) {
            "use strict";
            function n(e, t, a) {
                var n = document.createElement("a");
                (n.href = window.URL.createObjectURL(e)),
                    (n.download = t + "." + a),
                    n.click();
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.download = t.downloadPCM = t.downloadWAV = void 0),
                (t.downloadWAV = function (e, t) {
                    void 0 === t && (t = "recorder"), n(e, t, "wav");
                }),
                (t.downloadPCM = function (e, t) {
                    void 0 === t && (t = "recorder"), n(e, t, "pcm");
                }),
                (t.download = function (e, t, a) {
                    return n(e, t, a);
                });
        },
        function (e, t, a) {
            var n = a(0),
                s = (n.System, n.VbrMode),
                r = n.Float,
                i = n.ShortBlock,
                o = n.Util,
                _ = n.Arrays,
                l = (n.new_array_n, n.new_byte, n.new_double, n.new_float),
                f = n.new_float_n,
                c = n.new_int,
                u = (n.new_int_n, n.assert),
                h = a(20),
                p = a(1);
            e.exports = function () {
                var e = a(2),
                    t = new h(),
                    n = 2.302585092994046,
                    b = 1 / 217621504 / (p.BLKSIZE / 2);
                function m(e, t) {
                    for (var a = 0, n = 0; n < p.BLKSIZE / 2; ++n)
                        a += e[n] * t.ATH.eql_w[n];
                    return (a *= b);
                }
                function d(e, a, n, s, r, i, _, l, f, c, u) {
                    var h = e.internal_flags;
                    if (f < 2)
                        t.fft_long(h, s[r], f, c, u),
                            t.fft_short(h, i[_], f, c, u);
                    else if (2 == f) {
                        for (var b = p.BLKSIZE - 1; b >= 0; --b) {
                            var d = s[r + 0][b],
                                v = s[r + 1][b];
                            (s[r + 0][b] = (d + v) * o.SQRT2 * 0.5),
                                (s[r + 1][b] = (d - v) * o.SQRT2 * 0.5);
                        }
                        for (var g = 2; g >= 0; --g)
                            for (b = p.BLKSIZE_s - 1; b >= 0; --b) {
                                (d = i[_ + 0][g][b]), (v = i[_ + 1][g][b]);
                                (i[_ + 0][g][b] = (d + v) * o.SQRT2 * 0.5),
                                    (i[_ + 1][g][b] = (d - v) * o.SQRT2 * 0.5);
                            }
                    }
                    (a[0] = s[r + 0][0]), (a[0] *= a[0]);
                    for (b = p.BLKSIZE / 2 - 1; b >= 0; --b) {
                        var S = s[r + 0][p.BLKSIZE / 2 - b],
                            w = s[r + 0][p.BLKSIZE / 2 + b];
                        a[p.BLKSIZE / 2 - b] = 0.5 * (S * S + w * w);
                    }
                    for (g = 2; g >= 0; --g) {
                        (n[g][0] = i[_ + 0][g][0]), (n[g][0] *= n[g][0]);
                        for (b = p.BLKSIZE_s / 2 - 1; b >= 0; --b) {
                            (S = i[_ + 0][g][p.BLKSIZE_s / 2 - b]),
                                (w = i[_ + 0][g][p.BLKSIZE_s / 2 + b]);
                            n[g][p.BLKSIZE_s / 2 - b] = 0.5 * (S * S + w * w);
                        }
                    }
                    var M = 0;
                    for (b = 11; b < p.HBLKSIZE; b++) M += a[b];
                    if (((h.tot_ener[f] = M), e.analysis)) {
                        for (b = 0; b < p.HBLKSIZE; b++)
                            (h.pinfo.energy[l][f][b] =
                                h.pinfo.energy_save[f][b]),
                                (h.pinfo.energy_save[f][b] = a[b]);
                        h.pinfo.pe[l][f] = h.pe[f];
                    }
                    2 == e.athaa_loudapprox &&
                        f < 2 &&
                        ((h.loudness_sq[l][f] = h.loudness_sq_save[f]),
                        (h.loudness_sq_save[f] = m(a, h)));
                }
                var v,
                    g,
                    S,
                    w = [
                        1, 0.79433, 0.63096, 0.63096, 0.63096, 0.63096, 0.63096,
                        0.25119, 0.11749,
                    ],
                    M = [
                        3.3246 * 3.3246,
                        3.23837 * 3.23837,
                        9.9500500969,
                        9.0247369744,
                        8.1854926609,
                        7.0440875649,
                        2.46209 * 2.46209,
                        2.284 * 2.284,
                        4.4892710641,
                        1.96552 * 1.96552,
                        1.82335 * 1.82335,
                        1.69146 * 1.69146,
                        2.4621061921,
                        2.1508568964,
                        1.37074 * 1.37074,
                        1.31036 * 1.31036,
                        1.5691069696,
                        1.4555939904,
                        1.16203 * 1.16203,
                        1.2715945225,
                        1.09428 * 1.09428,
                        1.0659 * 1.0659,
                        1.0779838276,
                        1.0382591025,
                        1,
                    ],
                    A = [
                        1.7782755904,
                        1.35879 * 1.35879,
                        1.38454 * 1.38454,
                        1.39497 * 1.39497,
                        1.40548 * 1.40548,
                        1.3537 * 1.3537,
                        1.6999465924,
                        1.22321 * 1.22321,
                        1.3169398564,
                        1,
                    ],
                    y = [
                        5.5396212496,
                        2.29259 * 2.29259,
                        4.9868695969,
                        2.12675 * 2.12675,
                        2.02545 * 2.02545,
                        1.87894 * 1.87894,
                        1.74303 * 1.74303,
                        1.61695 * 1.61695,
                        2.2499700001,
                        1.39148 * 1.39148,
                        1.29083 * 1.29083,
                        1.19746 * 1.19746,
                        1.2339655056,
                        1.0779838276,
                    ];
                function R(e, t, a, n, s, r) {
                    var i;
                    if (t > e) {
                        if (!(t < e * g)) return e + t;
                        i = t / e;
                    } else {
                        if (e >= t * g) return e + t;
                        i = e / t;
                    }
                    if ((u(e >= 0), u(t >= 0), (e += t), n + 3 <= 6)) {
                        if (i >= v) return e;
                        var _ = 0 | o.FAST_LOG10_X(i, 16);
                        return e * A[_];
                    }
                    var l, f;
                    _ = 0 | o.FAST_LOG10_X(i, 16);
                    return (
                        (t =
                            0 != r
                                ? s.ATH.cb_s[a] * s.ATH.adjust
                                : s.ATH.cb_l[a] * s.ATH.adjust),
                        u(t >= 0),
                        e < S * t
                            ? e > t
                                ? ((l = 1),
                                  _ <= 13 && (l = y[_]),
                                  (f = o.FAST_LOG10_X(e / t, 10 / 15)),
                                  e * ((M[_] - l) * f + l))
                                : _ > 13
                                ? e
                                : e * y[_]
                            : e * M[_]
                    );
                }
                var B = [
                    1.7782755904,
                    1.35879 * 1.35879,
                    1.38454 * 1.38454,
                    1.39497 * 1.39497,
                    1.40548 * 1.40548,
                    1.3537 * 1.3537,
                    1.6999465924,
                    1.22321 * 1.22321,
                    1.3169398564,
                    1,
                ];
                function E(e, t, a) {
                    var n;
                    if ((e < 0 && (e = 0), t < 0 && (t = 0), e <= 0)) return t;
                    if (t <= 0) return e;
                    if (((n = t > e ? t / e : e / t), -2 <= a && a <= 2)) {
                        if (n >= v) return e + t;
                        var s = 0 | o.FAST_LOG10_X(n, 16);
                        return (e + t) * B[s];
                    }
                    return n < g ? e + t : (e < t && (e = t), e);
                }
                function T(e, t, a, n, s) {
                    var r,
                        i,
                        o = 0,
                        _ = 0;
                    for (r = i = 0; r < p.SBMAX_s; ++i, ++r) {
                        for (
                            var l = e.bo_s[r], f = e.npart_s, c = l < f ? l : f;
                            i < c;

                        )
                            u(t[i] >= 0),
                                u(a[i] >= 0),
                                (o += t[i]),
                                (_ += a[i]),
                                i++;
                        if (
                            ((e.en[n].s[r][s] = o),
                            (e.thm[n].s[r][s] = _),
                            i >= f)
                        ) {
                            ++r;
                            break;
                        }
                        u(t[i] >= 0), u(a[i] >= 0);
                        var h = e.PSY.bo_s_weight[r],
                            b = 1 - h;
                        (o = h * t[i]),
                            (_ = h * a[i]),
                            (e.en[n].s[r][s] += o),
                            (e.thm[n].s[r][s] += _),
                            (o = b * t[i]),
                            (_ = b * a[i]);
                    }
                    for (; r < p.SBMAX_s; ++r)
                        (e.en[n].s[r][s] = 0), (e.thm[n].s[r][s] = 0);
                }
                function x(e, t, a, n) {
                    var s,
                        r,
                        i = 0,
                        o = 0;
                    for (s = r = 0; s < p.SBMAX_l; ++r, ++s) {
                        for (
                            var _ = e.bo_l[s], l = e.npart_l, f = _ < l ? _ : l;
                            r < f;

                        )
                            u(t[r] >= 0),
                                u(a[r] >= 0),
                                (i += t[r]),
                                (o += a[r]),
                                r++;
                        if (((e.en[n].l[s] = i), (e.thm[n].l[s] = o), r >= l)) {
                            ++s;
                            break;
                        }
                        u(t[r] >= 0), u(a[r] >= 0);
                        var c = e.PSY.bo_l_weight[s],
                            h = 1 - c;
                        (i = c * t[r]),
                            (o = c * a[r]),
                            (e.en[n].l[s] += i),
                            (e.thm[n].l[s] += o),
                            (i = h * t[r]),
                            (o = h * a[r]);
                    }
                    for (; s < p.SBMAX_l; ++s)
                        (e.en[n].l[s] = 0), (e.thm[n].l[s] = 0);
                }
                function k(e, t, a, n, s, r) {
                    var i,
                        o,
                        _ = e.internal_flags;
                    for (o = i = 0; o < _.npart_s; ++o) {
                        for (
                            var l = 0, f = 0, c = _.numlines_s[o], h = 0;
                            h < c;
                            ++h, ++i
                        ) {
                            var b = t[r][i];
                            (l += b), f < b && (f = b);
                        }
                        a[o] = l;
                    }
                    for (
                        u(o == _.npart_s), u(129 == i), i = o = 0;
                        o < _.npart_s;
                        o++
                    ) {
                        var m = _.s3ind_s[o][0],
                            d = _.s3_ss[i++] * a[m];
                        for (++m; m <= _.s3ind_s[o][1]; )
                            (d += _.s3_ss[i] * a[m]), ++i, ++m;
                        var v = 2 * _.nb_s1[s][o];
                        if (
                            ((n[o] = Math.min(d, v)),
                            _.blocktype_old[1 & s] == p.SHORT_TYPE)
                        ) {
                            v = 16 * _.nb_s2[s][o];
                            var g = n[o];
                            n[o] = Math.min(v, g);
                        }
                        (_.nb_s2[s][o] = _.nb_s1[s][o]),
                            (_.nb_s1[s][o] = d),
                            u(n[o] >= 0);
                    }
                    for (; o <= p.CBANDS; ++o) (a[o] = 0), (n[o] = 0);
                }
                function P(e, t, a) {
                    return a >= 1
                        ? e
                        : a <= 0
                        ? t
                        : t > 0
                        ? Math.pow(e / t, a) * t
                        : 0;
                }
                var I = [
                    11.8, 13.6, 17.2, 32, 46.5, 51.3, 57.5, 67.1, 71.5, 84.6,
                    97.6, 130,
                ];
                function V(e, t) {
                    for (var a = 309.07, s = 0; s < p.SBMAX_s - 1; s++)
                        for (var r = 0; r < 3; r++) {
                            var i = e.thm.s[s][r];
                            if ((u(s < I.length), i > 0)) {
                                var _ = i * t,
                                    l = e.en.s[s][r];
                                l > _ &&
                                    (l > 1e10 * _
                                        ? (a += I[s] * (10 * n))
                                        : (u(_ > 0),
                                          (a += I[s] * o.FAST_LOG10(l / _))));
                            }
                        }
                    return a;
                }
                var O = [
                    6.8, 5.8, 5.8, 6.4, 6.5, 9.9, 12.1, 14.4, 15, 18.9, 21.6,
                    26.9, 34.2, 40.2, 46.8, 56.5, 60.7, 73.9, 85.7, 93.4, 126.1,
                ];
                function L(e, t) {
                    for (var a = 281.0575, s = 0; s < p.SBMAX_l - 1; s++) {
                        var r = e.thm.l[s];
                        if ((u(s < O.length), r > 0)) {
                            var i = r * t,
                                _ = e.en.l[s];
                            _ > i &&
                                (_ > 1e10 * i
                                    ? (a += O[s] * (10 * n))
                                    : (u(i > 0),
                                      (a += O[s] * o.FAST_LOG10(_ / i))));
                        }
                    }
                    return a;
                }
                function H(e, t, a, n, s) {
                    var r, i;
                    for (r = i = 0; r < e.npart_l; ++r) {
                        var o,
                            _ = 0,
                            l = 0;
                        for (o = 0; o < e.numlines_l[r]; ++o, ++i) {
                            var f = t[i];
                            u(f >= 0), (_ += f), l < f && (l = f);
                        }
                        (a[r] = _),
                            (n[r] = l),
                            (s[r] = _ * e.rnumlines_l[r]),
                            u(e.rnumlines_l[r] >= 0),
                            u(_ >= 0),
                            u(a[r] >= 0),
                            u(n[r] >= 0),
                            u(s[r] >= 0);
                    }
                }
                function N(e, t, a, n) {
                    var s = w.length - 1,
                        r = 0,
                        i = a[r] + a[r + 1];
                    (u(i >= 0), i > 0)
                        ? ((o = t[r]) < t[r + 1] && (o = t[r + 1]),
                          u(e.numlines_l[r] + e.numlines_l[r + 1] - 1 > 0),
                          (_ =
                              0 |
                              (i =
                                  (20 * (2 * o - i)) /
                                  (i *
                                      (e.numlines_l[r] +
                                          e.numlines_l[r + 1] -
                                          1)))) > s && (_ = s),
                          (n[r] = _))
                        : (n[r] = 0);
                    for (r = 1; r < e.npart_l - 1; r++) {
                        var o, _;
                        if (
                            ((i = a[r - 1] + a[r] + a[r + 1]), u(i >= 0), i > 0)
                        )
                            (o = t[r - 1]) < t[r] && (o = t[r]),
                                o < t[r + 1] && (o = t[r + 1]),
                                u(
                                    e.numlines_l[r - 1] +
                                        e.numlines_l[r] +
                                        e.numlines_l[r + 1] -
                                        1 >
                                        0
                                ),
                                (_ =
                                    0 |
                                    (i =
                                        (20 * (3 * o - i)) /
                                        (i *
                                            (e.numlines_l[r - 1] +
                                                e.numlines_l[r] +
                                                e.numlines_l[r + 1] -
                                                1)))) > s && (_ = s),
                                (n[r] = _);
                        else n[r] = 0;
                    }
                    (u(r > 0),
                    u(r == e.npart_l - 1),
                    (i = a[r - 1] + a[r]),
                    u(i >= 0),
                    i > 0)
                        ? ((o = t[r - 1]) < t[r] && (o = t[r]),
                          u(e.numlines_l[r - 1] + e.numlines_l[r] - 1 > 0),
                          (_ =
                              0 |
                              (i =
                                  (20 * (2 * o - i)) /
                                  (i *
                                      (e.numlines_l[r - 1] +
                                          e.numlines_l[r] -
                                          1)))) > s && (_ = s),
                          (n[r] = _))
                        : (n[r] = 0);
                    u(r == e.npart_l - 1);
                }
                var D = [
                    -1730326e-23, -0.01703172, -1349528e-23, 0.0418072,
                    -673278e-22, -0.0876324, -30835e-21, 0.1863476,
                    -1104424e-22, -0.627638,
                ];
                function X(e, a, n, s, r, i, _, l) {
                    var f = e.internal_flags;
                    if (s < 2) t.fft_long(f, _[l], s, a, n);
                    else if (2 == s)
                        for (var c = p.BLKSIZE - 1; c >= 0; --c) {
                            var u = _[l + 0][c],
                                h = _[l + 1][c];
                            (_[l + 0][c] = (u + h) * o.SQRT2 * 0.5),
                                (_[l + 1][c] = (u - h) * o.SQRT2 * 0.5);
                        }
                    (i[0] = _[l + 0][0]), (i[0] *= i[0]);
                    for (c = p.BLKSIZE / 2 - 1; c >= 0; --c) {
                        var b = _[l + 0][p.BLKSIZE / 2 - c],
                            m = _[l + 0][p.BLKSIZE / 2 + c];
                        i[p.BLKSIZE / 2 - c] = 0.5 * (b * b + m * m);
                    }
                    var d = 0;
                    for (c = 11; c < p.HBLKSIZE; c++) d += i[c];
                    if (((f.tot_ener[s] = d), e.analysis)) {
                        for (c = 0; c < p.HBLKSIZE; c++)
                            (f.pinfo.energy[r][s][c] =
                                f.pinfo.energy_save[s][c]),
                                (f.pinfo.energy_save[s][c] = i[c]);
                        f.pinfo.pe[r][s] = f.pe[s];
                    }
                }
                function C(e, a, n, s, r, i, _, l) {
                    var f = e.internal_flags;
                    if (
                        (0 == r && s < 2 && t.fft_short(f, _[l], s, a, n),
                        2 == s)
                    )
                        for (var c = p.BLKSIZE_s - 1; c >= 0; --c) {
                            var u = _[l + 0][r][c],
                                h = _[l + 1][r][c];
                            (_[l + 0][r][c] = (u + h) * o.SQRT2 * 0.5),
                                (_[l + 1][r][c] = (u - h) * o.SQRT2 * 0.5);
                        }
                    (i[r][0] = _[l + 0][r][0]), (i[r][0] *= i[r][0]);
                    for (c = p.BLKSIZE_s / 2 - 1; c >= 0; --c) {
                        var b = _[l + 0][r][p.BLKSIZE_s / 2 - c],
                            m = _[l + 0][r][p.BLKSIZE_s / 2 + c];
                        i[r][p.BLKSIZE_s / 2 - c] = 0.5 * (b * b + m * m);
                    }
                }
                function F(e, t, a, n) {
                    var s = e.internal_flags;
                    2 == e.athaa_loudapprox &&
                        a < 2 &&
                        ((s.loudness_sq[t][a] = s.loudness_sq_save[a]),
                        (s.loudness_sq_save[a] = m(n, s)));
                }
                this.L3psycho_anal_ns = function (
                    t,
                    a,
                    n,
                    r,
                    o,
                    h,
                    b,
                    m,
                    v,
                    g
                ) {
                    var S,
                        M,
                        A,
                        y,
                        B,
                        E,
                        I,
                        O,
                        X,
                        C,
                        F = t.internal_flags,
                        q = f([2, p.BLKSIZE]),
                        Y = f([2, 3, p.BLKSIZE_s]),
                        j = l(p.CBANDS + 1),
                        U = l(p.CBANDS + 1),
                        z = l(p.CBANDS + 2),
                        G = c(2),
                        K = c(2),
                        Z = f([2, 576]),
                        W = c(p.CBANDS + 2),
                        Q = c(p.CBANDS + 2);
                    for (
                        _.fill(Q, 0),
                            S = F.channels_out,
                            t.mode == e.JOINT_STEREO && (S = 4),
                            X =
                                t.VBR == s.vbr_off
                                    ? 0 == F.ResvMax
                                        ? 0
                                        : (F.ResvSize / F.ResvMax) * 0.5
                                    : t.VBR == s.vbr_rh ||
                                      t.VBR == s.vbr_mtrh ||
                                      t.VBR == s.vbr_mt
                                    ? 0.6
                                    : 1,
                            M = 0;
                        M < F.channels_out;
                        M++
                    ) {
                        var J = a[M],
                            $ = n + 576 - 350 - 21 + 192;
                        for (u(10 == D.length), y = 0; y < 576; y++) {
                            var ee, te;
                            for (
                                ee = J[$ + y + 10], te = 0, B = 0;
                                B < 9;
                                B += 2
                            )
                                (ee +=
                                    D[B] * (J[$ + y + B] + J[$ + y + 21 - B])),
                                    (te +=
                                        D[B + 1] *
                                        (J[$ + y + B + 1] +
                                            J[$ + y + 21 - B - 1]));
                            Z[M][y] = ee + te;
                        }
                        o[r][M].en.assign(F.en[M]),
                            o[r][M].thm.assign(F.thm[M]),
                            S > 2 &&
                                (h[r][M].en.assign(F.en[M + 2]),
                                h[r][M].thm.assign(F.thm[M + 2]));
                    }
                    for (M = 0; M < S; M++) {
                        var ae,
                            ne = l(12),
                            se = [0, 0, 0, 0],
                            re = l(12),
                            ie = 1,
                            oe = l(p.CBANDS),
                            _e = l(p.CBANDS),
                            le = [0, 0, 0, 0],
                            fe = l(p.HBLKSIZE),
                            ce = f([3, p.HBLKSIZE_s]);
                        for (
                            u(F.npart_s <= p.CBANDS),
                                u(F.npart_l <= p.CBANDS),
                                y = 0;
                            y < 3;
                            y++
                        )
                            (ne[y] = F.nsPsy.last_en_subshort[M][y + 6]),
                                u(F.nsPsy.last_en_subshort[M][y + 4] > 0),
                                (re[y] =
                                    ne[y] / F.nsPsy.last_en_subshort[M][y + 4]),
                                (se[0] += ne[y]);
                        if (2 == M)
                            for (y = 0; y < 576; y++) {
                                var ue, he;
                                (ue = Z[0][y]),
                                    (he = Z[1][y]),
                                    (Z[0][y] = ue + he),
                                    (Z[1][y] = ue - he);
                            }
                        var pe = Z[1 & M],
                            be = 0;
                        for (y = 0; y < 9; y++) {
                            for (var me = be + 64, de = 1; be < me; be++)
                                de < Math.abs(pe[be]) &&
                                    (de = Math.abs(pe[be]));
                            (F.nsPsy.last_en_subshort[M][y] = ne[y + 3] = de),
                                (se[1 + y / 3] += de),
                                de > ne[y + 3 - 2]
                                    ? (u(ne[y + 3 - 2] > 0),
                                      (de /= ne[y + 3 - 2]))
                                    : ne[y + 3 - 2] > 10 * de
                                    ? (u(de > 0),
                                      (de = ne[y + 3 - 2] / (10 * de)))
                                    : (de = 0),
                                (re[y + 3] = de);
                        }
                        if (t.analysis) {
                            var ve = re[0];
                            for (y = 1; y < 12; y++) ve < re[y] && (ve = re[y]);
                            (F.pinfo.ers[r][M] = F.pinfo.ers_save[M]),
                                (F.pinfo.ers_save[M] = ve);
                        }
                        for (
                            ae =
                                3 == M
                                    ? F.nsPsy.attackthre_s
                                    : F.nsPsy.attackthre,
                                y = 0;
                            y < 12;
                            y++
                        )
                            0 == le[y / 3] &&
                                re[y] > ae &&
                                (le[y / 3] = (y % 3) + 1);
                        for (y = 1; y < 4; y++) {
                            var ge;
                            se[y - 1] > se[y]
                                ? (u(se[y] > 0), (ge = se[y - 1] / se[y]))
                                : (u(se[y - 1] > 0), (ge = se[y] / se[y - 1])),
                                ge < 1.7 &&
                                    ((le[y] = 0), 1 == y && (le[0] = 0));
                        }
                        for (
                            0 != le[0] &&
                                0 != F.nsPsy.lastAttacks[M] &&
                                (le[0] = 0),
                                (3 != F.nsPsy.lastAttacks[M] &&
                                    le[0] + le[1] + le[2] + le[3] == 0) ||
                                    ((ie = 0),
                                    0 != le[1] && 0 != le[0] && (le[1] = 0),
                                    0 != le[2] && 0 != le[1] && (le[2] = 0),
                                    0 != le[3] && 0 != le[2] && (le[3] = 0)),
                                M < 2
                                    ? (K[M] = ie)
                                    : 0 == ie && (K[0] = K[1] = 0),
                                v[M] = F.tot_ener[M],
                                d(t, fe, ce, q, 1 & M, Y, 1 & M, r, M, a, n),
                                H(F, fe, j, oe, _e),
                                N(F, oe, _e, W),
                                O = 0;
                            O < 3;
                            O++
                        ) {
                            var Se, we;
                            for (
                                k(t, ce, U, z, M, O), T(F, U, z, M, O), I = 0;
                                I < p.SBMAX_s;
                                I++
                            ) {
                                if (
                                    ((we = F.thm[M].s[I][O]),
                                    (we *= 0.8),
                                    le[O] >= 2 || 1 == le[O + 1])
                                ) {
                                    var Me = 0 != O ? O - 1 : 2;
                                    de = P(F.thm[M].s[I][Me], we, 0.6 * X);
                                    we = Math.min(we, de);
                                }
                                if (1 == le[O]) {
                                    (Me = 0 != O ? O - 1 : 2),
                                        (de = P(
                                            F.thm[M].s[I][Me],
                                            we,
                                            0.3 * X
                                        ));
                                    we = Math.min(we, de);
                                } else if (
                                    (0 != O && 3 == le[O - 1]) ||
                                    (0 == O && 3 == F.nsPsy.lastAttacks[M])
                                ) {
                                    (Me = 2 != O ? O + 1 : 0),
                                        (de = P(
                                            F.thm[M].s[I][Me],
                                            we,
                                            0.3 * X
                                        ));
                                    we = Math.min(we, de);
                                }
                                (Se =
                                    ne[3 * O + 3] +
                                    ne[3 * O + 4] +
                                    ne[3 * O + 5]),
                                    6 * ne[3 * O + 5] < Se &&
                                        ((we *= 0.5),
                                        6 * ne[3 * O + 4] < Se && (we *= 0.5)),
                                    (F.thm[M].s[I][O] = we);
                            }
                        }
                        for (
                            F.nsPsy.lastAttacks[M] = le[2], E = 0, A = 0;
                            A < F.npart_l;
                            A++
                        ) {
                            for (
                                var Ae = F.s3ind[A][0],
                                    ye = j[Ae] * w[W[Ae]],
                                    Re = F.s3_ll[E++] * ye;
                                ++Ae <= F.s3ind[A][1];

                            )
                                (ye = j[Ae] * w[W[Ae]]),
                                    (Re = R(
                                        Re,
                                        F.s3_ll[E++] * ye,
                                        Ae,
                                        Ae - A,
                                        F,
                                        0
                                    ));
                            (Re *= 0.158489319246111),
                                F.blocktype_old[1 & M] == p.SHORT_TYPE
                                    ? (z[A] = Re)
                                    : (z[A] = P(
                                          Math.min(
                                              Re,
                                              Math.min(
                                                  2 * F.nb_1[M][A],
                                                  16 * F.nb_2[M][A]
                                              )
                                          ),
                                          Re,
                                          X
                                      )),
                                (F.nb_2[M][A] = F.nb_1[M][A]),
                                (F.nb_1[M][A] = Re);
                        }
                        for (; A <= p.CBANDS; ++A) (j[A] = 0), (z[A] = 0);
                        x(F, j, z, M);
                    }
                    ((t.mode != e.STEREO && t.mode != e.JOINT_STEREO) ||
                        (t.interChRatio > 0 &&
                            (function (e, t) {
                                var a = e.internal_flags;
                                if (a.channels_out > 1) {
                                    for (var n = 0; n < p.SBMAX_l; n++) {
                                        var s = a.thm[0].l[n],
                                            r = a.thm[1].l[n];
                                        (a.thm[0].l[n] += r * t),
                                            (a.thm[1].l[n] += s * t);
                                    }
                                    for (n = 0; n < p.SBMAX_s; n++)
                                        for (var i = 0; i < 3; i++) {
                                            (s = a.thm[0].s[n][i]),
                                                (r = a.thm[1].s[n][i]);
                                            (a.thm[0].s[n][i] += r * t),
                                                (a.thm[1].s[n][i] += s * t);
                                        }
                                }
                            })(t, t.interChRatio)),
                    t.mode == e.JOINT_STEREO) &&
                        (!(function (e) {
                            for (var t = 0; t < p.SBMAX_l; t++)
                                if (
                                    !(
                                        e.thm[0].l[t] > 1.58 * e.thm[1].l[t] ||
                                        e.thm[1].l[t] > 1.58 * e.thm[0].l[t]
                                    )
                                ) {
                                    var a = e.mld_l[t] * e.en[3].l[t],
                                        n = Math.max(
                                            e.thm[2].l[t],
                                            Math.min(e.thm[3].l[t], a)
                                        );
                                    a = e.mld_l[t] * e.en[2].l[t];
                                    var s = Math.max(
                                        e.thm[3].l[t],
                                        Math.min(e.thm[2].l[t], a)
                                    );
                                    (e.thm[2].l[t] = n), (e.thm[3].l[t] = s);
                                }
                            for (t = 0; t < p.SBMAX_s; t++)
                                for (var r = 0; r < 3; r++)
                                    if (
                                        !(
                                            e.thm[0].s[t][r] >
                                                1.58 * e.thm[1].s[t][r] ||
                                            e.thm[1].s[t][r] >
                                                1.58 * e.thm[0].s[t][r]
                                        )
                                    ) {
                                        (a = e.mld_s[t] * e.en[3].s[t][r]),
                                            (n = Math.max(
                                                e.thm[2].s[t][r],
                                                Math.min(e.thm[3].s[t][r], a)
                                            ));
                                        a = e.mld_s[t] * e.en[2].s[t][r];
                                        s = Math.max(
                                            e.thm[3].s[t][r],
                                            Math.min(e.thm[2].s[t][r], a)
                                        );
                                        (e.thm[2].s[t][r] = n),
                                            (e.thm[3].s[t][r] = s);
                                    }
                        })(F),
                        (C = t.msfix),
                        Math.abs(C) > 0 &&
                            (function (e, t, a) {
                                var n = t,
                                    s = Math.pow(10, a);
                                (t *= 2), (n *= 2);
                                for (var r = 0; r < p.SBMAX_l; r++) {
                                    if (
                                        ((f = e.ATH.cb_l[e.bm_l[r]] * s),
                                        (o = Math.min(
                                            Math.max(e.thm[0].l[r], f),
                                            Math.max(e.thm[1].l[r], f)
                                        )) *
                                            t <
                                            (_ = Math.max(e.thm[2].l[r], f)) +
                                                (l = Math.max(
                                                    e.thm[3].l[r],
                                                    f
                                                )))
                                    )
                                        u(
                                            (_ *= c = (o * n) / (_ + l)) +
                                                (l *= c) >
                                                0
                                        );
                                    (e.thm[2].l[r] = Math.min(
                                        _,
                                        e.thm[2].l[r]
                                    )),
                                        (e.thm[3].l[r] = Math.min(
                                            l,
                                            e.thm[3].l[r]
                                        ));
                                }
                                for (
                                    s *= p.BLKSIZE_s / p.BLKSIZE, r = 0;
                                    r < p.SBMAX_s;
                                    r++
                                )
                                    for (var i = 0; i < 3; i++) {
                                        var o, _, l, f, c;
                                        if (
                                            ((f = e.ATH.cb_s[e.bm_s[r]] * s),
                                            (o = Math.min(
                                                Math.max(e.thm[0].s[r][i], f),
                                                Math.max(e.thm[1].s[r][i], f)
                                            )) *
                                                t <
                                                (_ = Math.max(
                                                    e.thm[2].s[r][i],
                                                    f
                                                )) +
                                                    (l = Math.max(
                                                        e.thm[3].s[r][i],
                                                        f
                                                    )))
                                        )
                                            u(
                                                (_ *= c = (o * t) / (_ + l)) +
                                                    (l *= c) >
                                                    0
                                            );
                                        (e.thm[2].s[r][i] = Math.min(
                                            e.thm[2].s[r][i],
                                            _
                                        )),
                                            (e.thm[3].s[r][i] = Math.min(
                                                e.thm[3].s[r][i],
                                                l
                                            ));
                                    }
                            })(F, C, t.ATHlower * F.ATH.adjust));
                    for (
                        (function (e, t, a, n) {
                            var s = e.internal_flags;
                            e.short_blocks != i.short_block_coupled ||
                                (0 != t[0] && 0 != t[1]) ||
                                (t[0] = t[1] = 0);
                            for (var r = 0; r < s.channels_out; r++)
                                (n[r] = p.NORM_TYPE),
                                    e.short_blocks == i.short_block_dispensed &&
                                        (t[r] = 1),
                                    e.short_blocks == i.short_block_forced &&
                                        (t[r] = 0),
                                    0 != t[r]
                                        ? (u(
                                              s.blocktype_old[r] != p.START_TYPE
                                          ),
                                          s.blocktype_old[r] == p.SHORT_TYPE &&
                                              (n[r] = p.STOP_TYPE))
                                        : ((n[r] = p.SHORT_TYPE),
                                          s.blocktype_old[r] == p.NORM_TYPE &&
                                              (s.blocktype_old[r] =
                                                  p.START_TYPE),
                                          s.blocktype_old[r] == p.STOP_TYPE &&
                                              (s.blocktype_old[r] =
                                                  p.SHORT_TYPE)),
                                    (a[r] = s.blocktype_old[r]),
                                    (s.blocktype_old[r] = n[r]);
                        })(t, K, g, G),
                            M = 0;
                        M < S;
                        M++
                    ) {
                        var Be,
                            Ee,
                            Te,
                            xe = 0;
                        M > 1
                            ? ((Be = m),
                              (xe = -2),
                              (Ee = p.NORM_TYPE),
                              (g[0] != p.SHORT_TYPE && g[1] != p.SHORT_TYPE) ||
                                  (Ee = p.SHORT_TYPE),
                              (Te = h[r][M - 2]))
                            : ((Be = b), (xe = 0), (Ee = g[M]), (Te = o[r][M])),
                            Ee == p.SHORT_TYPE
                                ? (Be[xe + M] = V(Te, F.masking_lower))
                                : (Be[xe + M] = L(Te, F.masking_lower)),
                            t.analysis && (F.pinfo.pe[r][M] = Be[xe + M]);
                    }
                    return 0;
                };
                var q = [
                    -1730326e-23, -0.01703172, -1349528e-23, 0.0418072,
                    -673278e-22, -0.0876324, -30835e-21, 0.1863476,
                    -1104424e-22, -0.627638,
                ];
                function Y(e, t, a) {
                    if (0 == a)
                        for (var n = 0; n < e.npart_s; n++)
                            (e.nb_s2[t][n] = e.nb_s1[t][n]),
                                (e.nb_s1[t][n] = 0);
                }
                function j(e, t) {
                    for (var a = 0; a < e.npart_l; a++)
                        (e.nb_2[t][a] = e.nb_1[t][a]), (e.nb_1[t][a] = 0);
                }
                function U(e, t, a, n, s, r) {
                    var i,
                        o,
                        _,
                        f = e.internal_flags,
                        c = new float[p.CBANDS](),
                        h = l(p.CBANDS),
                        b = new int[p.CBANDS]();
                    for (_ = o = 0; _ < f.npart_s; ++_) {
                        var m = 0,
                            d = 0,
                            v = f.numlines_s[_];
                        for (i = 0; i < v; ++i, ++o) {
                            var g = t[r][o];
                            (m += g), d < g && (d = g);
                        }
                        (a[_] = m),
                            u(m >= 0),
                            (c[_] = d),
                            u(v > 0),
                            (h[_] = m / v),
                            u(h[_] >= 0);
                    }
                    for (u(_ == f.npart_s), u(129 == o); _ < p.CBANDS; ++_)
                        (c[_] = 0), (h[_] = 0);
                    for (
                        (function (e, t, a, n) {
                            var s = w.length - 1,
                                r = 0,
                                i = a[r] + a[r + 1];
                            for (
                                u(i >= 0),
                                    i > 0
                                        ? ((o = t[r]) < t[r + 1] &&
                                              (o = t[r + 1]),
                                          u(
                                              e.numlines_s[r] +
                                                  e.numlines_s[r + 1] -
                                                  1 >
                                                  0
                                          ),
                                          (_ =
                                              0 |
                                              (i =
                                                  (20 * (2 * o - i)) /
                                                  (i *
                                                      (e.numlines_s[r] +
                                                          e.numlines_s[r + 1] -
                                                          1)))) > s && (_ = s),
                                          (n[r] = _))
                                        : (n[r] = 0),
                                    r = 1;
                                r < e.npart_s - 1;
                                r++
                            ) {
                                var o, _;
                                if (
                                    ((i = a[r - 1] + a[r] + a[r + 1]),
                                    u(r + 1 < e.npart_s),
                                    u(i >= 0),
                                    i > 0)
                                )
                                    (o = t[r - 1]) < t[r] && (o = t[r]),
                                        o < t[r + 1] && (o = t[r + 1]),
                                        u(
                                            e.numlines_s[r - 1] +
                                                e.numlines_s[r] +
                                                e.numlines_s[r + 1] -
                                                1 >
                                                0
                                        ),
                                        (_ =
                                            0 |
                                            (i =
                                                (20 * (3 * o - i)) /
                                                (i *
                                                    (e.numlines_s[r - 1] +
                                                        e.numlines_s[r] +
                                                        e.numlines_s[r + 1] -
                                                        1)))) > s && (_ = s),
                                        (n[r] = _);
                                else n[r] = 0;
                            }
                            u(r > 0),
                                u(r == e.npart_s - 1),
                                (i = a[r - 1] + a[r]),
                                u(i >= 0),
                                i > 0
                                    ? ((o = t[r - 1]) < t[r] && (o = t[r]),
                                      u(
                                          e.numlines_s[r - 1] +
                                              e.numlines_s[r] -
                                              1 >
                                              0
                                      ),
                                      (_ =
                                          0 |
                                          (i =
                                              (20 * (2 * o - i)) /
                                              (i *
                                                  (e.numlines_s[r - 1] +
                                                      e.numlines_s[r] -
                                                      1)))) > s && (_ = s),
                                      (n[r] = _))
                                    : (n[r] = 0),
                                u(r == e.npart_s - 1);
                        })(f, c, h, b),
                            o = _ = 0;
                        _ < f.npart_s;
                        _++
                    ) {
                        var S,
                            M,
                            A,
                            y,
                            R,
                            B = f.s3ind_s[_][0],
                            T = f.s3ind_s[_][1];
                        for (
                            S = b[B],
                                M = 1,
                                y = f.s3_ss[o] * a[B] * w[b[B]],
                                ++o,
                                ++B;
                            B <= T;

                        )
                            (S += b[B]),
                                (M += 1),
                                (y = E(
                                    y,
                                    (A = f.s3_ss[o] * a[B] * w[b[B]]),
                                    B - _
                                )),
                                ++o,
                                ++B;
                        (y *= R = 0.5 * w[(S = (1 + 2 * S) / (2 * M))]),
                            (n[_] = y),
                            (f.nb_s2[s][_] = f.nb_s1[s][_]),
                            (f.nb_s1[s][_] = y),
                            (A = c[_]),
                            (A *= f.minval_s[_]),
                            (A *= R),
                            n[_] > A && (n[_] = A),
                            f.masking_lower > 1 && (n[_] *= f.masking_lower),
                            n[_] > a[_] && (n[_] = a[_]),
                            f.masking_lower < 1 && (n[_] *= f.masking_lower),
                            u(n[_] >= 0);
                    }
                    for (; _ < p.CBANDS; ++_) (a[_] = 0), (n[_] = 0);
                }
                function z(e, t, a, n, s) {
                    var r,
                        i = l(p.CBANDS),
                        o = l(p.CBANDS),
                        _ = c(p.CBANDS + 2);
                    H(e, t, a, i, o), N(e, i, o, _);
                    var f = 0;
                    for (r = 0; r < e.npart_l; r++) {
                        var h,
                            b,
                            m,
                            d = e.s3ind[r][0],
                            v = e.s3ind[r][1],
                            g = 0,
                            S = 0;
                        for (
                            g = _[d],
                                S += 1,
                                b = e.s3_ll[f] * a[d] * w[_[d]],
                                ++f,
                                ++d;
                            d <= v;

                        )
                            (g += _[d]),
                                (S += 1),
                                (b = E(
                                    b,
                                    (h = e.s3_ll[f] * a[d] * w[_[d]]),
                                    d - r
                                )),
                                ++f,
                                ++d;
                        if (
                            ((b *= m = 0.5 * w[(g = (1 + 2 * g) / (2 * S))]),
                            e.blocktype_old[1 & s] == p.SHORT_TYPE)
                        ) {
                            var M = 2 * e.nb_1[s][r];
                            n[r] =
                                M > 0
                                    ? Math.min(b, M)
                                    : Math.min(b, 0.3 * a[r]);
                        } else {
                            var A = 16 * e.nb_2[s][r],
                                y = 2 * e.nb_1[s][r];
                            A <= 0 && (A = b),
                                y <= 0 && (y = b),
                                (M =
                                    e.blocktype_old[1 & s] == p.NORM_TYPE
                                        ? Math.min(y, A)
                                        : y),
                                (n[r] = Math.min(b, M));
                        }
                        (e.nb_2[s][r] = e.nb_1[s][r]),
                            (e.nb_1[s][r] = b),
                            (h = i[r]),
                            (h *= e.minval_l[r]),
                            (h *= m),
                            n[r] > h && (n[r] = h),
                            e.masking_lower > 1 && (n[r] *= e.masking_lower),
                            n[r] > a[r] && (n[r] = a[r]),
                            e.masking_lower < 1 && (n[r] *= e.masking_lower),
                            u(n[r] >= 0);
                    }
                    for (; r < p.CBANDS; ++r) (a[r] = 0), (n[r] = 0);
                }
                function G(e, t, a, n, s, r, i) {
                    for (
                        var o,
                            _,
                            l = 2 * r,
                            f = r > 0 ? Math.pow(10, s) : 1,
                            c = 0;
                        c < i;
                        ++c
                    ) {
                        var h = e[2][c],
                            p = e[3][c],
                            b = t[0][c],
                            m = t[1][c],
                            d = t[2][c],
                            v = t[3][c];
                        if (b <= 1.58 * m && m <= 1.58 * b) {
                            var g = a[c] * p,
                                S = a[c] * h;
                            (_ = Math.max(d, Math.min(v, g))),
                                (o = Math.max(v, Math.min(d, S)));
                        } else (_ = d), (o = v);
                        if (r > 0) {
                            var w,
                                M,
                                A = n[c] * f;
                            if (
                                ((w = Math.min(Math.max(b, A), Math.max(m, A))),
                                (M =
                                    (d = Math.max(_, A)) +
                                    (v = Math.max(o, A))) > 0 && w * l < M)
                            ) {
                                var y = (w * l) / M;
                                (d *= y), (v *= y), u(M > 0);
                            }
                            (_ = Math.min(d, _)), (o = Math.min(v, o));
                        }
                        _ > h && (_ = h),
                            o > p && (o = p),
                            (t[2][c] = _),
                            (t[3][c] = o);
                    }
                }
                function K(e, t) {
                    var a;
                    return (a = e >= 0 ? 27 * -e : e * t) <= -72
                        ? 0
                        : Math.exp(0.2302585093 * a);
                }
                function Z(e) {
                    var t,
                        a,
                        n = 0;
                    for (n = 0; K(n, e) > 1e-20; n -= 1);
                    for (s = n, r = 0; Math.abs(r - s) > 1e-12; )
                        K((n = (r + s) / 2), e) > 0 ? (r = n) : (s = n);
                    t = s;
                    var s, r;
                    n = 0;
                    for (n = 0; K(n, e) > 1e-20; n += 1);
                    for (s = 0, r = n; Math.abs(r - s) > 1e-12; )
                        K((n = (r + s) / 2), e) > 0 ? (s = n) : (r = n);
                    a = r;
                    var i,
                        o = 0,
                        _ = 1e3;
                    for (i = 0; i <= _; ++i) {
                        o += K((n = t + (i * (a - t)) / _), e);
                    }
                    return 1001 / (o * (a - t));
                }
                function W(e) {
                    return (
                        e < 0 && (e = 0),
                        (e *= 0.001),
                        13 * Math.atan(0.76 * e) +
                            3.5 * Math.atan((e * e) / 56.25)
                    );
                }
                function Q(e, t, a, n, s, r, i, o, _, f, h, b) {
                    var m,
                        d = l(p.CBANDS + 1),
                        v = o / (b > 15 ? 1152 : 384),
                        g = c(p.HBLKSIZE);
                    o /= _;
                    var S = 0,
                        w = 0;
                    for (m = 0; m < p.CBANDS; m++) {
                        var M;
                        for (
                            P = W(o * S), d[m] = o * S, M = S;
                            W(o * M) - P < 0.34 && M <= _ / 2;
                            M++
                        );
                        for (e[m] = M - S, w = m + 1; S < M; )
                            u(S < p.HBLKSIZE), (g[S++] = m);
                        if (S > _ / 2) {
                            (S = _ / 2), ++m;
                            break;
                        }
                    }
                    u(m < p.CBANDS), (d[m] = o * S);
                    for (var A = 0; A < b; A++) {
                        var y, R, B, E, T;
                        (B = f[A]),
                            (E = f[A + 1]),
                            (y = 0 | Math.floor(0.5 + h * (B - 0.5))) < 0 &&
                                (y = 0),
                            (R = 0 | Math.floor(0.5 + h * (E - 0.5))) > _ / 2 &&
                                (R = _ / 2),
                            (a[A] = (g[y] + g[R]) / 2),
                            (t[A] = g[R]);
                        var x = v * E;
                        (i[A] = (x - d[t[A]]) / (d[t[A] + 1] - d[t[A]])),
                            i[A] < 0 ? (i[A] = 0) : i[A] > 1 && (i[A] = 1),
                            (T = W(o * f[A] * h)),
                            (T = Math.min(T, 15.5) / 15.5),
                            (r[A] = Math.pow(
                                10,
                                1.25 * (1 - Math.cos(Math.PI * T)) - 2.5
                            ));
                    }
                    S = 0;
                    for (var k = 0; k < w; k++) {
                        var P,
                            I,
                            V = e[k];
                        (P = W(o * S)),
                            (I = W(o * (S + V - 1))),
                            (n[k] = 0.5 * (P + I)),
                            (P = W(o * (S - 0.5))),
                            (I = W(o * (S + V - 0.5))),
                            (s[k] = I - P),
                            (S += V);
                    }
                    return w;
                }
                function J(e, t, a, n, s, r) {
                    var i,
                        o,
                        _,
                        c,
                        u,
                        h,
                        b = f([p.CBANDS, p.CBANDS]),
                        m = 0;
                    if (r)
                        for (var d = 0; d < t; d++)
                            for (i = 0; i < t; i++) {
                                var v =
                                    ((o = a[d] - a[i]),
                                    (_ = void 0),
                                    (c = void 0),
                                    (u = void 0),
                                    (h = void 0),
                                    (_ = o),
                                    (c =
                                        (_ *= _ >= 0 ? 3 : 1.5) >= 0.5 &&
                                        _ <= 2.5
                                            ? 8 * ((h = _ - 0.5) * h - 2 * h)
                                            : 0),
                                    ((u =
                                        15.811389 +
                                        7.5 * (_ += 0.474) -
                                        17.5 * Math.sqrt(1 + _ * _)) <= -60
                                        ? 0
                                        : ((_ = Math.exp(
                                              0.2302585093 * (c + u)
                                          )),
                                          (_ /= 0.6609193))) * n[i]);
                                b[d][i] = v * s[d];
                            }
                    else
                        for (i = 0; i < t; i++) {
                            var g = 15 + Math.min(21 / a[i], 12),
                                S = Z(g);
                            for (d = 0; d < t; d++) {
                                v = S * K(a[d] - a[i], g) * n[i];
                                b[d][i] = v * s[d];
                            }
                        }
                    for (d = 0; d < t; d++) {
                        for (i = 0; i < t && !(b[d][i] > 0); i++);
                        for (
                            e[d][0] = i, i = t - 1;
                            i > 0 && !(b[d][i] > 0);
                            i--
                        );
                        (e[d][1] = i), (m += e[d][1] - e[d][0] + 1);
                    }
                    var w = l(m),
                        M = 0;
                    for (d = 0; d < t; d++)
                        for (i = e[d][0]; i <= e[d][1]; i++) w[M++] = b[d][i];
                    return w;
                }
                function $(e) {
                    var t = W(e);
                    return (
                        (t = Math.min(t, 15.5) / 15.5),
                        Math.pow(10, 1.25 * (1 - Math.cos(Math.PI * t)) - 2.5)
                    );
                }
                function ee(e, t) {
                    return (
                        e < -0.3 && (e = 3410),
                        (e /= 1e3),
                        (e = Math.max(0.1, e)),
                        3.64 * Math.pow(e, -0.8) -
                            6.8 * Math.exp(-0.6 * Math.pow(e - 3.4, 2)) +
                            6 * Math.exp(-0.15 * Math.pow(e - 8.7, 2)) +
                            0.001 * (0.6 + 0.04 * t) * Math.pow(e, 4)
                    );
                }
                (this.L3psycho_anal_vbr = function (
                    t,
                    a,
                    n,
                    s,
                    r,
                    o,
                    _,
                    h,
                    b,
                    m
                ) {
                    var d = t.internal_flags,
                        v = l(p.HBLKSIZE),
                        g = f([3, p.HBLKSIZE_s]),
                        S = f([2, p.BLKSIZE]),
                        w = f([2, 3, p.BLKSIZE_s]),
                        M = f([4, p.CBANDS]),
                        A = f([4, p.CBANDS]),
                        y = f([4, 3]),
                        R = [
                            [0, 0, 0, 0],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0],
                            [0, 0, 0, 0],
                        ],
                        B = c(2),
                        E = t.mode == e.JOINT_STEREO ? 4 : d.channels_out;
                    !(function (t, a, n, s, r, i, o, _, c, h) {
                        for (
                            var p = f([2, 576]),
                                b = t.internal_flags,
                                m = b.channels_out,
                                d = t.mode == e.JOINT_STEREO ? 4 : m,
                                v = 0;
                            v < m;
                            v++
                        ) {
                            firbuf = a[v];
                            var g = n + 576 - 350 - 21 + 192;
                            u(10 == q.length);
                            for (var S = 0; S < 576; S++) {
                                var w, M;
                                (w = firbuf[g + S + 10]), (M = 0);
                                for (var A = 0; A < 9; A += 2)
                                    (w +=
                                        q[A] *
                                        (firbuf[g + S + A] +
                                            firbuf[g + S + 21 - A])),
                                        (M +=
                                            q[A + 1] *
                                            (firbuf[g + S + A + 1] +
                                                firbuf[g + S + 21 - A - 1]));
                                p[v][S] = w + M;
                            }
                            r[s][v].en.assign(b.en[v]),
                                r[s][v].thm.assign(b.thm[v]),
                                d > 2 &&
                                    (i[s][v].en.assign(b.en[v + 2]),
                                    i[s][v].thm.assign(b.thm[v + 2]));
                        }
                        for (v = 0; v < d; v++) {
                            var y = l(12),
                                R = l(12),
                                B = [0, 0, 0, 0],
                                E = p[1 & v],
                                T = 0,
                                x =
                                    3 == v
                                        ? b.nsPsy.attackthre_s
                                        : b.nsPsy.attackthre,
                                k = 1;
                            if (2 == v)
                                for (S = 0, A = 576; A > 0; ++S, --A) {
                                    var P = p[0][S],
                                        I = p[1][S];
                                    (p[0][S] = P + I), (p[1][S] = P - I);
                                }
                            for (S = 0; S < 3; S++)
                                (R[S] = b.nsPsy.last_en_subshort[v][S + 6]),
                                    u(b.nsPsy.last_en_subshort[v][S + 4] > 0),
                                    (y[S] =
                                        R[S] /
                                        b.nsPsy.last_en_subshort[v][S + 4]),
                                    (B[0] += R[S]);
                            for (S = 0; S < 9; S++) {
                                for (var V = T + 64, O = 1; T < V; T++)
                                    O < Math.abs(E[T]) && (O = Math.abs(E[T]));
                                (b.nsPsy.last_en_subshort[v][S] = R[S + 3] = O),
                                    (B[1 + S / 3] += O),
                                    O > R[S + 3 - 2]
                                        ? (u(R[S + 3 - 2] > 0),
                                          (O /= R[S + 3 - 2]))
                                        : R[S + 3 - 2] > 10 * O
                                        ? (u(O > 0),
                                          (O = R[S + 3 - 2] / (10 * O)))
                                        : (O = 0),
                                    (y[S + 3] = O);
                            }
                            for (S = 0; S < 3; ++S) {
                                var L =
                                        R[3 * S + 3] +
                                        R[3 * S + 4] +
                                        R[3 * S + 5],
                                    H = 1;
                                6 * R[3 * S + 5] < L &&
                                    ((H *= 0.5),
                                    6 * R[3 * S + 4] < L && (H *= 0.5)),
                                    (_[v][S] = H);
                            }
                            if (t.analysis) {
                                var N = y[0];
                                for (S = 1; S < 12; S++) N < y[S] && (N = y[S]);
                                (b.pinfo.ers[s][v] = b.pinfo.ers_save[v]),
                                    (b.pinfo.ers_save[v] = N);
                            }
                            for (S = 0; S < 12; S++)
                                0 == c[v][S / 3] &&
                                    y[S] > x &&
                                    (c[v][S / 3] = (S % 3) + 1);
                            for (S = 1; S < 4; S++) {
                                var D = B[S - 1],
                                    X = B[S];
                                Math.max(D, X) < 4e4 &&
                                    D < 1.7 * X &&
                                    X < 1.7 * D &&
                                    (1 == S &&
                                        c[v][0] <= c[v][S] &&
                                        (c[v][0] = 0),
                                    (c[v][S] = 0));
                            }
                            c[v][0] <= b.nsPsy.lastAttacks[v] && (c[v][0] = 0),
                                (3 != b.nsPsy.lastAttacks[v] &&
                                    c[v][0] + c[v][1] + c[v][2] + c[v][3] ==
                                        0) ||
                                    ((k = 0),
                                    0 != c[v][1] &&
                                        0 != c[v][0] &&
                                        (c[v][1] = 0),
                                    0 != c[v][2] &&
                                        0 != c[v][1] &&
                                        (c[v][2] = 0),
                                    0 != c[v][3] &&
                                        0 != c[v][2] &&
                                        (c[v][3] = 0)),
                                v < 2
                                    ? (h[v] = k)
                                    : 0 == k && (h[0] = h[1] = 0),
                                (o[v] = b.tot_ener[v]);
                        }
                    })(t, a, n, s, r, o, b, y, R, B),
                        (function (e, t) {
                            var a = e.internal_flags;
                            e.short_blocks != i.short_block_coupled ||
                                (0 != t[0] && 0 != t[1]) ||
                                (t[0] = t[1] = 0);
                            for (var n = 0; n < a.channels_out; n++)
                                e.short_blocks == i.short_block_dispensed &&
                                    (t[n] = 1),
                                    e.short_blocks == i.short_block_forced &&
                                        (t[n] = 0);
                        })(t, B);
                    for (var k = 0; k < E; k++) {
                        X(t, a, n, k, s, v, S, (O = 1 & k)),
                            F(t, s, k, v),
                            0 != B[O] ? z(d, v, M[k], A[k], k) : j(d, k);
                    }
                    B[0] + B[1] == 2 &&
                        t.mode == e.JOINT_STEREO &&
                        G(
                            M,
                            A,
                            d.mld_cb_l,
                            d.ATH.cb_l,
                            t.ATHlower * d.ATH.adjust,
                            t.msfix,
                            d.npart_l
                        );
                    for (k = 0; k < E; k++) {
                        0 != B[(O = 1 & k)] && x(d, M[k], A[k], k);
                    }
                    for (var I = 0; I < 3; I++) {
                        for (k = 0; k < E; ++k) {
                            0 != B[(O = 1 & k)]
                                ? Y(d, k, I)
                                : (C(t, a, n, k, I, g, w, O),
                                  U(t, g, M[k], A[k], k, I));
                        }
                        B[0] + B[1] == 0 &&
                            t.mode == e.JOINT_STEREO &&
                            G(
                                M,
                                A,
                                d.mld_cb_s,
                                d.ATH.cb_s,
                                t.ATHlower * d.ATH.adjust,
                                t.msfix,
                                d.npart_s
                            );
                        for (k = 0; k < E; ++k) {
                            0 == B[(O = 1 & k)] && T(d, M[k], A[k], k, I);
                        }
                    }
                    for (k = 0; k < E; k++) {
                        var O;
                        if (0 == B[(O = 1 & k)])
                            for (var H = 0; H < p.SBMAX_s; H++) {
                                var N = l(3);
                                for (I = 0; I < 3; I++) {
                                    var D = d.thm[k].s[H][I];
                                    if (
                                        ((D *= 0.8),
                                        R[k][I] >= 2 || 1 == R[k][I + 1])
                                    ) {
                                        var K = 0 != I ? I - 1 : 2,
                                            Z = P(d.thm[k].s[H][K], D, 0.36);
                                        D = Math.min(D, Z);
                                    } else if (1 == R[k][I]) {
                                        (K = 0 != I ? I - 1 : 2),
                                            (Z = P(d.thm[k].s[H][K], D, 0.18));
                                        D = Math.min(D, Z);
                                    } else if (
                                        (0 != I && 3 == R[k][I - 1]) ||
                                        (0 == I && 3 == d.nsPsy.lastAttacks[k])
                                    ) {
                                        (K = 2 != I ? I + 1 : 0),
                                            (Z = P(d.thm[k].s[H][K], D, 0.18));
                                        D = Math.min(D, Z);
                                    }
                                    (D *= y[k][I]), (N[I] = D);
                                }
                                for (I = 0; I < 3; I++) d.thm[k].s[H][I] = N[I];
                            }
                    }
                    for (k = 0; k < E; k++) d.nsPsy.lastAttacks[k] = R[k][2];
                    !(function (e, t, a) {
                        for (
                            var n = e.internal_flags, s = 0;
                            s < n.channels_out;
                            s++
                        ) {
                            var r = p.NORM_TYPE;
                            0 != t[s]
                                ? (u(n.blocktype_old[s] != p.START_TYPE),
                                  n.blocktype_old[s] == p.SHORT_TYPE &&
                                      (r = p.STOP_TYPE))
                                : ((r = p.SHORT_TYPE),
                                  n.blocktype_old[s] == p.NORM_TYPE &&
                                      (n.blocktype_old[s] = p.START_TYPE),
                                  n.blocktype_old[s] == p.STOP_TYPE &&
                                      (n.blocktype_old[s] = p.SHORT_TYPE)),
                                (a[s] = n.blocktype_old[s]),
                                (n.blocktype_old[s] = r);
                        }
                    })(t, B, m);
                    for (k = 0; k < E; k++) {
                        var W, Q, J, $;
                        k > 1
                            ? ((W = h),
                              (Q = -2),
                              (J = p.NORM_TYPE),
                              (m[0] != p.SHORT_TYPE && m[1] != p.SHORT_TYPE) ||
                                  (J = p.SHORT_TYPE),
                              ($ = o[s][k - 2]))
                            : ((W = _), (Q = 0), (J = m[k]), ($ = r[s][k])),
                            J == p.SHORT_TYPE
                                ? (W[Q + k] = V($, d.masking_lower))
                                : (W[Q + k] = L($, d.masking_lower)),
                            t.analysis && (d.pinfo.pe[s][k] = W[Q + k]);
                    }
                    return 0;
                }),
                    (this.psymodel_init = function (e) {
                        var a,
                            i = e.internal_flags,
                            o = !0,
                            _ = 13,
                            f = 0,
                            c = 0,
                            h = -8.25,
                            b = -4.5,
                            m = l(p.CBANDS),
                            d = l(p.CBANDS),
                            w = l(p.CBANDS),
                            M = e.out_samplerate;
                        switch (e.experimentalZ) {
                            default:
                            case 0:
                                o = !0;
                                break;
                            case 1:
                                o = e.VBR != s.vbr_mtrh && e.VBR != s.vbr_mt;
                                break;
                            case 2:
                                o = !1;
                                break;
                            case 3:
                                (_ = 8),
                                    (f = -1.75),
                                    (c = -0.0125),
                                    (h = -8.25),
                                    (b = -2.25);
                        }
                        for (
                            i.ms_ener_ratio_old = 0.25,
                                i.blocktype_old[0] = i.blocktype_old[1] =
                                    p.NORM_TYPE,
                                a = 0;
                            a < 4;
                            ++a
                        ) {
                            for (var A = 0; A < p.CBANDS; ++A)
                                (i.nb_1[a][A] = 1e20),
                                    (i.nb_2[a][A] = 1e20),
                                    (i.nb_s1[a][A] = i.nb_s2[a][A] = 1);
                            for (var y = 0; y < p.SBMAX_l; y++)
                                (i.en[a].l[y] = 1e20), (i.thm[a].l[y] = 1e20);
                            for (A = 0; A < 3; ++A) {
                                for (y = 0; y < p.SBMAX_s; y++)
                                    (i.en[a].s[y][A] = 1e20),
                                        (i.thm[a].s[y][A] = 1e20);
                                i.nsPsy.lastAttacks[a] = 0;
                            }
                            for (A = 0; A < 9; A++)
                                i.nsPsy.last_en_subshort[a][A] = 10;
                        }
                        for (
                            i.loudness_sq_save[0] = i.loudness_sq_save[1] = 0,
                                i.npart_l = Q(
                                    i.numlines_l,
                                    i.bo_l,
                                    i.bm_l,
                                    m,
                                    d,
                                    i.mld_l,
                                    i.PSY.bo_l_weight,
                                    M,
                                    p.BLKSIZE,
                                    i.scalefac_band.l,
                                    p.BLKSIZE / 1152,
                                    p.SBMAX_l
                                ),
                                u(i.npart_l < p.CBANDS),
                                a = 0;
                            a < i.npart_l;
                            a++
                        ) {
                            var R = f;
                            m[a] >= _ &&
                                (R =
                                    (c * (m[a] - _)) / (24 - _) +
                                    (f * (24 - m[a])) / (24 - _)),
                                (w[a] = Math.pow(10, R / 10)),
                                i.numlines_l[a] > 0
                                    ? (i.rnumlines_l[a] = 1 / i.numlines_l[a])
                                    : (i.rnumlines_l[a] = 0);
                        }
                        i.s3_ll = J(i.s3ind, i.npart_l, m, d, w, o);
                        var B;
                        A = 0;
                        for (a = 0; a < i.npart_l; a++) {
                            x = r.MAX_VALUE;
                            for (var E = 0; E < i.numlines_l[a]; E++, A++) {
                                var T = (M * A) / (1e3 * p.BLKSIZE);
                                (k = this.ATHformula(1e3 * T, e) - 20),
                                    (k = Math.pow(10, 0.1 * k)),
                                    x > (k *= i.numlines_l[a]) && (x = k);
                            }
                            (i.ATH.cb_l[a] = x),
                                (x = (20 * m[a]) / 10 - 20) > 6 && (x = 100),
                                x < -15 && (x = -15),
                                (x -= 8),
                                (i.minval_l[a] =
                                    Math.pow(10, x / 10) * i.numlines_l[a]);
                        }
                        for (
                            i.npart_s = Q(
                                i.numlines_s,
                                i.bo_s,
                                i.bm_s,
                                m,
                                d,
                                i.mld_s,
                                i.PSY.bo_s_weight,
                                M,
                                p.BLKSIZE_s,
                                i.scalefac_band.s,
                                p.BLKSIZE_s / 384,
                                p.SBMAX_s
                            ),
                                u(i.npart_s < p.CBANDS),
                                A = 0,
                                a = 0;
                            a < i.npart_s;
                            a++
                        ) {
                            var x;
                            R = h;
                            m[a] >= _ &&
                                (R =
                                    (b * (m[a] - _)) / (24 - _) +
                                    (h * (24 - m[a])) / (24 - _)),
                                (w[a] = Math.pow(10, R / 10)),
                                (x = r.MAX_VALUE);
                            for (E = 0; E < i.numlines_s[a]; E++, A++) {
                                var k;
                                T = (M * A) / (1e3 * p.BLKSIZE_s);
                                (k = this.ATHformula(1e3 * T, e) - 20),
                                    (k = Math.pow(10, 0.1 * k)),
                                    x > (k *= i.numlines_s[a]) && (x = k);
                            }
                            (i.ATH.cb_s[a] = x),
                                (x = (7 * m[a]) / 12 - 7),
                                m[a] > 12 && (x *= 1 + 3.1 * Math.log(1 + x)),
                                m[a] < 12 && (x *= 1 + 2.3 * Math.log(1 - x)),
                                x < -15 && (x = -15),
                                (x -= 8),
                                (i.minval_s[a] =
                                    Math.pow(10, x / 10) * i.numlines_s[a]);
                        }
                        (i.s3_ss = J(i.s3ind_s, i.npart_s, m, d, w, o)),
                            (v = Math.pow(10, 9 / 16)),
                            (g = Math.pow(10, 1.5)),
                            (S = Math.pow(10, 1.5)),
                            t.init_fft(i),
                            (i.decay = Math.exp((-1 * n) / ((0.01 * M) / 192))),
                            (B = 3.5),
                            0 != (2 & e.exp_nspsytune) && (B = 1),
                            Math.abs(e.msfix) > 0 && (B = e.msfix),
                            (e.msfix = B);
                        for (var P = 0; P < i.npart_l; P++)
                            i.s3ind[P][1] > i.npart_l - 1 &&
                                (i.s3ind[P][1] = i.npart_l - 1);
                        var I = (576 * i.mode_gr) / M;
                        if (
                            ((i.ATH.decay = Math.pow(10, -1.2 * I)),
                            (i.ATH.adjust = 0.01),
                            (i.ATH.adjustLimit = 1),
                            u(i.bo_l[p.SBMAX_l - 1] <= i.npart_l),
                            u(i.bo_s[p.SBMAX_s - 1] <= i.npart_s),
                            -1 != e.ATHtype)
                        ) {
                            var V = e.out_samplerate / p.BLKSIZE,
                                O = 0;
                            for (T = 0, a = 0; a < p.BLKSIZE / 2; ++a)
                                (T += V),
                                    (i.ATH.eql_w[a] =
                                        1 /
                                        Math.pow(
                                            10,
                                            this.ATHformula(T, e) / 10
                                        )),
                                    (O += i.ATH.eql_w[a]);
                            for (O = 1 / O, a = p.BLKSIZE / 2; --a >= 0; )
                                i.ATH.eql_w[a] *= O;
                        }
                        for (P = A = 0; P < i.npart_s; ++P)
                            for (a = 0; a < i.numlines_s[P]; ++a) ++A;
                        u(129 == A);
                        for (P = A = 0; P < i.npart_l; ++P)
                            for (a = 0; a < i.numlines_l[P]; ++a) ++A;
                        for (u(513 == A), A = 0, a = 0; a < i.npart_l; a++) {
                            T =
                                (M * (A + i.numlines_l[a] / 2)) /
                                (1 * p.BLKSIZE);
                            (i.mld_cb_l[a] = $(T)), (A += i.numlines_l[a]);
                        }
                        for (; a < p.CBANDS; ++a) i.mld_cb_l[a] = 1;
                        for (A = 0, a = 0; a < i.npart_s; a++) {
                            T =
                                (M * (A + i.numlines_s[a] / 2)) /
                                (1 * p.BLKSIZE_s);
                            (i.mld_cb_s[a] = $(T)), (A += i.numlines_s[a]);
                        }
                        for (; a < p.CBANDS; ++a) i.mld_cb_s[a] = 1;
                        return 0;
                    }),
                    (this.ATHformula = function (e, t) {
                        var a;
                        switch (t.ATHtype) {
                            case 0:
                                a = ee(e, 9);
                                break;
                            case 1:
                                a = ee(e, -1);
                                break;
                            case 2:
                                a = ee(e, 0);
                                break;
                            case 3:
                                a = ee(e, 1) + 6;
                                break;
                            case 4:
                                a = ee(e, t.ATHcurve);
                                break;
                            default:
                                a = ee(e, 0);
                        }
                        return a;
                    });
            };
        },
        function (e, t, a) {
            var n = a(0),
                s = (n.System, n.VbrMode, n.Float, n.ShortBlock, n.Util),
                r =
                    (n.Arrays,
                    n.new_array_n,
                    n.new_byte,
                    n.new_double,
                    n.new_float),
                i = (n.new_float_n, n.new_int, n.new_int_n, n.assert, a(1));
            e.exports = function () {
                var e = r(i.BLKSIZE),
                    t = r(i.BLKSIZE_s / 2),
                    a = [
                        0.9238795325112867, 0.3826834323650898,
                        0.9951847266721969, 0.0980171403295606,
                        0.9996988186962042, 0.02454122852291229,
                        0.9999811752826011, 0.006135884649154475,
                    ];
                function n(e, t, n) {
                    var r,
                        i,
                        o,
                        _ = 0,
                        l = t + (n <<= 1);
                    r = 4;
                    do {
                        var f, c, u, h, p, b, m;
                        (m = r >> 1),
                            (b = (p = r << 1) + (h = r)),
                            (r = p << 1),
                            (o = (i = t) + m);
                        do {
                            (A = e[i + 0] - e[i + h]),
                                (M = e[i + 0] + e[i + h]),
                                (E = e[i + p] - e[i + b]),
                                (R = e[i + p] + e[i + b]),
                                (e[i + p] = M - R),
                                (e[i + 0] = M + R),
                                (e[i + b] = A - E),
                                (e[i + h] = A + E),
                                (A = e[o + 0] - e[o + h]),
                                (M = e[o + 0] + e[o + h]),
                                (E = s.SQRT2 * e[o + b]),
                                (R = s.SQRT2 * e[o + p]),
                                (e[o + p] = M - R),
                                (e[o + 0] = M + R),
                                (e[o + b] = A - E),
                                (e[o + h] = A + E),
                                (o += r),
                                (i += r);
                        } while (i < l);
                        for (c = a[_ + 0], f = a[_ + 1], u = 1; u < m; u++) {
                            var d, v;
                            (d = 1 - 2 * f * f),
                                (v = 2 * f * c),
                                (i = t + u),
                                (o = t + h - u);
                            do {
                                var g, S, w, M, A, y, R, B, E, T;
                                (S = v * e[i + h] - d * e[o + h]),
                                    (g = d * e[i + h] + v * e[o + h]),
                                    (A = e[i + 0] - g),
                                    (M = e[i + 0] + g),
                                    (y = e[o + 0] - S),
                                    (w = e[o + 0] + S),
                                    (S = v * e[i + b] - d * e[o + b]),
                                    (g = d * e[i + b] + v * e[o + b]),
                                    (E = e[i + p] - g),
                                    (R = e[i + p] + g),
                                    (T = e[o + p] - S),
                                    (B = e[o + p] + S),
                                    (S = f * R - c * T),
                                    (g = c * R + f * T),
                                    (e[i + p] = M - g),
                                    (e[i + 0] = M + g),
                                    (e[o + b] = y - S),
                                    (e[o + h] = y + S),
                                    (S = c * B - f * E),
                                    (g = f * B + c * E),
                                    (e[o + p] = w - g),
                                    (e[o + 0] = w + g),
                                    (e[i + b] = A - S),
                                    (e[i + h] = A + S),
                                    (o += r),
                                    (i += r);
                            } while (i < l);
                            (c = (d = c) * a[_ + 0] - f * a[_ + 1]),
                                (f = d * a[_ + 1] + f * a[_ + 0]);
                        }
                        _ += 2;
                    } while (r < n);
                }
                var o = [
                    0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48,
                    176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152,
                    88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100,
                    228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204,
                    44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2,
                    130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178,
                    114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90,
                    218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230,
                    22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46,
                    174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254,
                ];
                (this.fft_short = function (e, a, s, r, _) {
                    for (var l = 0; l < 3; l++) {
                        var f = i.BLKSIZE_s / 2,
                            c = 65535 & (192 * (l + 1)),
                            u = i.BLKSIZE_s / 8 - 1;
                        do {
                            var h,
                                p,
                                b,
                                m,
                                d,
                                v = 255 & o[u << 2];
                            (p =
                                (h = t[v] * r[s][_ + v + c]) -
                                (d = t[127 - v] * r[s][_ + v + c + 128])),
                                (h += d),
                                (m =
                                    (b = t[v + 64] * r[s][_ + v + c + 64]) -
                                    (d = t[63 - v] * r[s][_ + v + c + 192])),
                                (b += d),
                                (f -= 4),
                                (a[l][f + 0] = h + b),
                                (a[l][f + 2] = h - b),
                                (a[l][f + 1] = p + m),
                                (a[l][f + 3] = p - m),
                                (p =
                                    (h = t[v + 1] * r[s][_ + v + c + 1]) -
                                    (d = t[126 - v] * r[s][_ + v + c + 129])),
                                (h += d),
                                (m =
                                    (b = t[v + 65] * r[s][_ + v + c + 65]) -
                                    (d = t[62 - v] * r[s][_ + v + c + 193])),
                                (b += d),
                                (a[l][f + i.BLKSIZE_s / 2 + 0] = h + b),
                                (a[l][f + i.BLKSIZE_s / 2 + 2] = h - b),
                                (a[l][f + i.BLKSIZE_s / 2 + 1] = p + m),
                                (a[l][f + i.BLKSIZE_s / 2 + 3] = p - m);
                        } while (--u >= 0);
                        n(a[l], f, i.BLKSIZE_s / 2);
                    }
                }),
                    (this.fft_long = function (t, a, s, r, _) {
                        var l = i.BLKSIZE / 8 - 1,
                            f = i.BLKSIZE / 2;
                        do {
                            var c,
                                u,
                                h,
                                p,
                                b,
                                m = 255 & o[l];
                            (u =
                                (c = e[m] * r[s][_ + m]) -
                                (b = e[m + 512] * r[s][_ + m + 512])),
                                (c += b),
                                (p =
                                    (h = e[m + 256] * r[s][_ + m + 256]) -
                                    (b = e[m + 768] * r[s][_ + m + 768])),
                                (h += b),
                                (a[(f -= 4) + 0] = c + h),
                                (a[f + 2] = c - h),
                                (a[f + 1] = u + p),
                                (a[f + 3] = u - p),
                                (u =
                                    (c = e[m + 1] * r[s][_ + m + 1]) -
                                    (b = e[m + 513] * r[s][_ + m + 513])),
                                (c += b),
                                (p =
                                    (h = e[m + 257] * r[s][_ + m + 257]) -
                                    (b = e[m + 769] * r[s][_ + m + 769])),
                                (h += b),
                                (a[f + i.BLKSIZE / 2 + 0] = c + h),
                                (a[f + i.BLKSIZE / 2 + 2] = c - h),
                                (a[f + i.BLKSIZE / 2 + 1] = u + p),
                                (a[f + i.BLKSIZE / 2 + 3] = u - p);
                        } while (--l >= 0);
                        n(a, f, i.BLKSIZE / 2);
                    }),
                    (this.init_fft = function (a) {
                        for (var n = 0; n < i.BLKSIZE; n++)
                            e[n] =
                                0.42 -
                                0.5 *
                                    Math.cos(
                                        (2 * Math.PI * (n + 0.5)) / i.BLKSIZE
                                    ) +
                                0.08 *
                                    Math.cos(
                                        (4 * Math.PI * (n + 0.5)) / i.BLKSIZE
                                    );
                        for (n = 0; n < i.BLKSIZE_s / 2; n++)
                            t[n] =
                                0.5 *
                                (1 -
                                    Math.cos(
                                        (2 * Math.PI * (n + 0.5)) / i.BLKSIZE_s
                                    ));
                    });
            };
        },
        function (e, t, a) {
            var n = a(0),
                s = n.System,
                r = (n.VbrMode, n.Float, n.ShortBlock, n.Util),
                i = n.Arrays,
                o = (n.new_array_n, n.new_byte, n.new_double, n.new_float),
                _ = (n.new_float_n, n.new_int, n.new_int_n, n.assert, a(1));
            e.exports = function () {
                var e = [
                        -0.1482523854003001,
                        32.308141959636465,
                        296.40344946382766,
                        883.1344870032432,
                        11113.947376231741,
                        1057.2713659324597,
                        305.7402417275812,
                        30.825928907280012,
                        3.8533188138216365,
                        59.42900443849514,
                        709.5899960123345,
                        5281.91112291017,
                        -5829.66483675846,
                        -817.6293103748613,
                        -76.91656988279972,
                        -4.594269939176596,
                        0.9063471690191471,
                        0.1960342806591213,
                        -0.15466694054279598,
                        34.324387823855965,
                        301.8067566458425,
                        817.599602898885,
                        11573.795901679885,
                        1181.2520595540152,
                        321.59731579894424,
                        31.232021761053772,
                        3.7107095756221318,
                        53.650946155329365,
                        684.167428119626,
                        5224.56624370173,
                        -6366.391851890084,
                        -908.9766368219582,
                        -89.83068876699639,
                        -5.411397422890401,
                        0.8206787908286602,
                        0.3901806440322567,
                        -0.16070888947830023,
                        36.147034243915876,
                        304.11815768187864,
                        732.7429163887613,
                        11989.60988270091,
                        1300.012278487897,
                        335.28490093152146,
                        31.48816102859945,
                        3.373875931311736,
                        47.232241542899175,
                        652.7371796173471,
                        5132.414255594984,
                        -6909.087078780055,
                        -1001.9990371107289,
                        -103.62185754286375,
                        -6.104916304710272,
                        0.7416505462720353,
                        0.5805693545089249,
                        -0.16636367662261495,
                        37.751650073343995,
                        303.01103387567713,
                        627.9747488785183,
                        12358.763425278165,
                        1412.2779918482834,
                        346.7496836825721,
                        31.598286663170416,
                        3.1598635433980946,
                        40.57878626349686,
                        616.1671130880391,
                        5007.833007176154,
                        -7454.040671756168,
                        -1095.7960341867115,
                        -118.24411666465777,
                        -6.818469345853504,
                        0.6681786379192989,
                        0.7653668647301797,
                        -0.1716176790982088,
                        39.11551877123304,
                        298.3413246578966,
                        503.5259106886539,
                        12679.589408408976,
                        1516.5821921214542,
                        355.9850766329023,
                        31.395241710249053,
                        2.9164211881972335,
                        33.79716964664243,
                        574.8943997801362,
                        4853.234992253242,
                        -7997.57021486075,
                        -1189.7624067269965,
                        -133.6444792601766,
                        -7.7202770609839915,
                        0.5993769336819237,
                        0.9427934736519954,
                        -0.17645823955292173,
                        40.21879108166477,
                        289.9982036694474,
                        359.3226160751053,
                        12950.259102786438,
                        1612.1013903507662,
                        362.85067106591504,
                        31.045922092242872,
                        2.822222032597987,
                        26.988862316190684,
                        529.8996541764288,
                        4671.371946949588,
                        -8535.899136645805,
                        -1282.5898586244496,
                        -149.58553632943463,
                        -8.643494270763135,
                        0.5345111359507916,
                        1.111140466039205,
                        -0.36174739330527045,
                        41.04429910497807,
                        277.5463268268618,
                        195.6386023135583,
                        13169.43812144731,
                        1697.6433561479398,
                        367.40983966190305,
                        30.557037410382826,
                        2.531473372857427,
                        20.070154905927314,
                        481.50208566532336,
                        4464.970341588308,
                        -9065.36882077239,
                        -1373.62841526722,
                        -166.1660487028118,
                        -9.58289321133207,
                        0.4729647758913199,
                        1.268786568327291,
                        -0.36970682634889585,
                        41.393213350082036,
                        261.2935935556502,
                        12.935476055240873,
                        13336.131683328815,
                        1772.508612059496,
                        369.76534388639965,
                        29.751323653701338,
                        2.4023193045459172,
                        13.304795348228817,
                        430.5615775526625,
                        4237.0568611071185,
                        -9581.931701634761,
                        -1461.6913552409758,
                        -183.12733958476446,
                        -10.718010163869403,
                        0.41421356237309503,
                        1.414213562373095,
                        -0.37677560326535325,
                        41.619486213528496,
                        241.05423794991074,
                        -187.94665032361226,
                        13450.063605744153,
                        1836.153896465782,
                        369.4908799925761,
                        29.001847876923147,
                        2.0714759319987186,
                        6.779591200894186,
                        377.7767837205709,
                        3990.386575512536,
                        -10081.709459700915,
                        -1545.947424837898,
                        -200.3762958015653,
                        -11.864482073055006,
                        0.3578057213145241,
                        1.546020906725474,
                        -0.3829366947518991,
                        41.1516456456653,
                        216.47684307105183,
                        -406.1569483347166,
                        13511.136535077321,
                        1887.8076599260432,
                        367.3025214564151,
                        28.136213436723654,
                        1.913880671464418,
                        0.3829366947518991,
                        323.85365704338597,
                        3728.1472257487526,
                        -10561.233882199509,
                        -1625.2025997821418,
                        -217.62525175416,
                        -13.015432208941645,
                        0.3033466836073424,
                        1.66293922460509,
                        -0.5822628872992417,
                        40.35639251440489,
                        188.20071124269245,
                        -640.2706748618148,
                        13519.21490106562,
                        1927.6022433578062,
                        362.8197642637487,
                        26.968821921868447,
                        1.7463817695935329,
                        -5.62650678237171,
                        269.3016715297017,
                        3453.386536448852,
                        -11016.145278780888,
                        -1698.6569643425091,
                        -234.7658734267683,
                        -14.16351421663124,
                        0.2504869601913055,
                        1.76384252869671,
                        -0.5887180101749253,
                        39.23429103868072,
                        155.76096234403798,
                        -889.2492977967378,
                        13475.470561874661,
                        1955.0535223723712,
                        356.4450994756727,
                        25.894952980042156,
                        1.5695032905781554,
                        -11.181939564328772,
                        214.80884394039484,
                        3169.1640829158237,
                        -11443.321309975563,
                        -1765.1588461316153,
                        -251.68908574481912,
                        -15.49755935939164,
                        0.198912367379658,
                        1.847759065022573,
                        -0.7912582233652842,
                        37.39369355329111,
                        119.699486012458,
                        -1151.0956593239027,
                        13380.446257078214,
                        1970.3952110853447,
                        348.01959814116185,
                        24.731487364283044,
                        1.3850130831637748,
                        -16.421408865300393,
                        161.05030052864092,
                        2878.3322807850063,
                        -11838.991423510031,
                        -1823.985884688674,
                        -268.2854986386903,
                        -16.81724543849939,
                        0.1483359875383474,
                        1.913880671464418,
                        -0.7960642926861912,
                        35.2322109610459,
                        80.01928065061526,
                        -1424.0212633405113,
                        13235.794061869668,
                        1973.804052543835,
                        337.9908651258184,
                        23.289159354463873,
                        1.3934255946442087,
                        -21.099669467133474,
                        108.48348407242611,
                        2583.700758091299,
                        -12199.726194855148,
                        -1874.2780658979746,
                        -284.2467154529415,
                        -18.11369784385905,
                        0.09849140335716425,
                        1.961570560806461,
                        -0.998795456205172,
                        32.56307803611191,
                        36.958364584370486,
                        -1706.075448829146,
                        13043.287458812016,
                        1965.3831106103316,
                        326.43182772364605,
                        22.175018750622293,
                        1.198638339011324,
                        -25.371248002043963,
                        57.53505923036915,
                        2288.41886619975,
                        -12522.674544337233,
                        -1914.8400385312243,
                        -299.26241273417224,
                        -19.37805630698734,
                        0.04912684976946725,
                        1.990369453344394,
                        (0.035780907 * r.SQRT2 * 0.5) / 2384e-9,
                        (0.017876148 * r.SQRT2 * 0.5) / 2384e-9,
                        (0.003134727 * r.SQRT2 * 0.5) / 2384e-9,
                        (0.002457142 * r.SQRT2 * 0.5) / 2384e-9,
                        (971317e-9 * r.SQRT2 * 0.5) / 2384e-9,
                        (218868e-9 * r.SQRT2 * 0.5) / 2384e-9,
                        (101566e-9 * r.SQRT2 * 0.5) / 2384e-9,
                        (13828e-9 * r.SQRT2 * 0.5) / 2384e-9,
                        12804.797818791945,
                        1945.5515939597317,
                        313.4244966442953,
                        20.801593959731544,
                        1995.1556208053692,
                        9.000838926174497,
                        -29.20218120805369,
                    ],
                    t = [
                        [
                            2382191739347913e-28, 6423305872147834e-28,
                            9400849094049688e-28, 1122435026096556e-27,
                            1183840321267481e-27, 1122435026096556e-27,
                            940084909404969e-27, 6423305872147839e-28,
                            2382191739347918e-28, 5456116108943412e-27,
                            4878985199565852e-27, 4240448995017367e-27,
                            3559909094758252e-27, 2858043359288075e-27,
                            2156177623817898e-27, 1475637723558783e-27,
                            8371015190102974e-28, 2599706096327376e-28,
                            -5456116108943412e-27, -4878985199565852e-27,
                            -4240448995017367e-27, -3559909094758252e-27,
                            -2858043359288076e-27, -2156177623817898e-27,
                            -1475637723558783e-27, -8371015190102975e-28,
                            -2599706096327376e-28, -2382191739347923e-28,
                            -6423305872147843e-28, -9400849094049696e-28,
                            -1122435026096556e-27, -1183840321267481e-27,
                            -1122435026096556e-27, -9400849094049694e-28,
                            -642330587214784e-27, -2382191739347918e-28,
                        ],
                        [
                            2382191739347913e-28, 6423305872147834e-28,
                            9400849094049688e-28, 1122435026096556e-27,
                            1183840321267481e-27, 1122435026096556e-27,
                            9400849094049688e-28, 6423305872147841e-28,
                            2382191739347918e-28, 5456116108943413e-27,
                            4878985199565852e-27, 4240448995017367e-27,
                            3559909094758253e-27, 2858043359288075e-27,
                            2156177623817898e-27, 1475637723558782e-27,
                            8371015190102975e-28, 2599706096327376e-28,
                            -5461314069809755e-27, -4921085770524055e-27,
                            -4343405037091838e-27, -3732668368707687e-27,
                            -3093523840190885e-27, -2430835727329465e-27,
                            -1734679010007751e-27, -974825365660928e-27,
                            -2797435120168326e-28, 0, 0, 0, 0, 0, 0,
                            -2283748241799531e-28, -4037858874020686e-28,
                            -2146547464825323e-28,
                        ],
                        [
                            0.1316524975873958, 0.414213562373095,
                            0.7673269879789602, 1.091308501069271,
                            1.303225372841206, 1.56968557711749,
                            1.920982126971166, 2.414213562373094,
                            3.171594802363212, 4.510708503662055,
                            7.595754112725146, 22.90376554843115,
                            0.984807753012208, 0.6427876096865394,
                            0.3420201433256688, 0.9396926207859084,
                            -0.1736481776669303, -0.7660444431189779,
                            0.8660254037844387, 0.5, -0.5144957554275265,
                            -0.4717319685649723, -0.3133774542039019,
                            -0.1819131996109812, -0.09457419252642064,
                            -0.04096558288530405, -0.01419856857247115,
                            -0.003699974673760037, 0.8574929257125442,
                            0.8817419973177052, 0.9496286491027329,
                            0.9833145924917901, 0.9955178160675857,
                            0.9991605581781475, 0.999899195244447,
                            0.9999931550702802,
                        ],
                        [
                            0, 0, 0, 0, 0, 0, 2283748241799531e-28,
                            4037858874020686e-28, 2146547464825323e-28,
                            5461314069809755e-27, 4921085770524055e-27,
                            4343405037091838e-27, 3732668368707687e-27,
                            3093523840190885e-27, 2430835727329466e-27,
                            1734679010007751e-27, 974825365660928e-27,
                            2797435120168326e-28, -5456116108943413e-27,
                            -4878985199565852e-27, -4240448995017367e-27,
                            -3559909094758253e-27, -2858043359288075e-27,
                            -2156177623817898e-27, -1475637723558782e-27,
                            -8371015190102975e-28, -2599706096327376e-28,
                            -2382191739347913e-28, -6423305872147834e-28,
                            -9400849094049688e-28, -1122435026096556e-27,
                            -1183840321267481e-27, -1122435026096556e-27,
                            -9400849094049688e-28, -6423305872147841e-28,
                            -2382191739347918e-28,
                        ],
                    ],
                    a = t[_.SHORT_TYPE],
                    n = t[_.SHORT_TYPE],
                    l = t[_.SHORT_TYPE],
                    f = t[_.SHORT_TYPE],
                    c = [
                        0, 1, 16, 17, 8, 9, 24, 25, 4, 5, 20, 21, 12, 13, 28,
                        29, 2, 3, 18, 19, 10, 11, 26, 27, 6, 7, 22, 23, 14, 15,
                        30, 31,
                    ];
                function u(t, a, n) {
                    for (
                        var s, i, o, _ = 10, l = a + 238 - 14 - 286, f = -15;
                        f < 0;
                        f++
                    ) {
                        var c, u, h;
                        (c = e[_ + -10]),
                            (u = t[l + -224] * c),
                            (h = t[a + 224] * c),
                            (c = e[_ + -9]),
                            (u += t[l + -160] * c),
                            (h += t[a + 160] * c),
                            (c = e[_ + -8]),
                            (u += t[l + -96] * c),
                            (h += t[a + 96] * c),
                            (c = e[_ + -7]),
                            (u += t[l + -32] * c),
                            (h += t[a + 32] * c),
                            (c = e[_ + -6]),
                            (u += t[l + 32] * c),
                            (h += t[a + -32] * c),
                            (c = e[_ + -5]),
                            (u += t[l + 96] * c),
                            (h += t[a + -96] * c),
                            (c = e[_ + -4]),
                            (u += t[l + 160] * c),
                            (h += t[a + -160] * c),
                            (c = e[_ + -3]),
                            (u += t[l + 224] * c),
                            (h += t[a + -224] * c),
                            (c = e[_ + -2]),
                            (u += t[a + -256] * c),
                            (h -= t[l + 256] * c),
                            (c = e[_ + -1]),
                            (u += t[a + -192] * c),
                            (h -= t[l + 192] * c),
                            (c = e[_ + 0]),
                            (u += t[a + -128] * c),
                            (h -= t[l + 128] * c),
                            (c = e[_ + 1]),
                            (u += t[a + -64] * c),
                            (h -= t[l + 64] * c),
                            (c = e[_ + 2]),
                            (u += t[a + 0] * c),
                            (h -= t[l + 0] * c),
                            (c = e[_ + 3]),
                            (u += t[a + 64] * c),
                            (h -= t[l + -64] * c),
                            (c = e[_ + 4]),
                            (u += t[a + 128] * c),
                            (h -= t[l + -128] * c),
                            (c = e[_ + 5]),
                            (u += t[a + 192] * c),
                            (c = (h -= t[l + -192] * c) - (u *= e[_ + 6])),
                            (n[30 + 2 * f] = h + u),
                            (n[31 + 2 * f] = e[_ + 7] * c),
                            (_ += 18),
                            a--,
                            l++;
                    }
                    (h = t[a + -16] * e[_ + -10]),
                        (u = t[a + -32] * e[_ + -2]),
                        (h += (t[a + -48] - t[a + 16]) * e[_ + -9]),
                        (u += t[a + -96] * e[_ + -1]),
                        (h += (t[a + -80] + t[a + 48]) * e[_ + -8]),
                        (u += t[a + -160] * e[_ + 0]),
                        (h += (t[a + -112] - t[a + 80]) * e[_ + -7]),
                        (u += t[a + -224] * e[_ + 1]),
                        (h += (t[a + -144] + t[a + 112]) * e[_ + -6]),
                        (u -= t[a + 32] * e[_ + 2]),
                        (h += (t[a + -176] - t[a + 144]) * e[_ + -5]),
                        (u -= t[a + 96] * e[_ + 3]),
                        (h += (t[a + -208] + t[a + 176]) * e[_ + -4]),
                        (u -= t[a + 160] * e[_ + 4]),
                        (h += (t[a + -240] - t[a + 208]) * e[_ + -3]),
                        (s = (u -= t[a + 224]) - h),
                        (i = u + h),
                        (h = n[14]),
                        (u = n[15] - h),
                        (n[31] = i + h),
                        (n[30] = s + u),
                        (n[15] = s - u),
                        (n[14] = i - h),
                        (o = n[28] - n[0]),
                        (n[0] += n[28]),
                        (n[28] = o * e[_ + -36 + 7]),
                        (o = n[29] - n[1]),
                        (n[1] += n[29]),
                        (n[29] = o * e[_ + -36 + 7]),
                        (o = n[26] - n[2]),
                        (n[2] += n[26]),
                        (n[26] = o * e[_ + -72 + 7]),
                        (o = n[27] - n[3]),
                        (n[3] += n[27]),
                        (n[27] = o * e[_ + -72 + 7]),
                        (o = n[24] - n[4]),
                        (n[4] += n[24]),
                        (n[24] = o * e[_ + -108 + 7]),
                        (o = n[25] - n[5]),
                        (n[5] += n[25]),
                        (n[25] = o * e[_ + -108 + 7]),
                        (o = n[22] - n[6]),
                        (n[6] += n[22]),
                        (n[22] = o * r.SQRT2),
                        (o = n[23] - n[7]),
                        (n[7] += n[23]),
                        (n[23] = o * r.SQRT2 - n[7]),
                        (n[7] -= n[6]),
                        (n[22] -= n[7]),
                        (n[23] -= n[22]),
                        (o = n[6]),
                        (n[6] = n[31] - o),
                        (n[31] = n[31] + o),
                        (o = n[7]),
                        (n[7] = n[30] - o),
                        (n[30] = n[30] + o),
                        (o = n[22]),
                        (n[22] = n[15] - o),
                        (n[15] = n[15] + o),
                        (o = n[23]),
                        (n[23] = n[14] - o),
                        (n[14] = n[14] + o),
                        (o = n[20] - n[8]),
                        (n[8] += n[20]),
                        (n[20] = o * e[_ + -180 + 7]),
                        (o = n[21] - n[9]),
                        (n[9] += n[21]),
                        (n[21] = o * e[_ + -180 + 7]),
                        (o = n[18] - n[10]),
                        (n[10] += n[18]),
                        (n[18] = o * e[_ + -216 + 7]),
                        (o = n[19] - n[11]),
                        (n[11] += n[19]),
                        (n[19] = o * e[_ + -216 + 7]),
                        (o = n[16] - n[12]),
                        (n[12] += n[16]),
                        (n[16] = o * e[_ + -252 + 7]),
                        (o = n[17] - n[13]),
                        (n[13] += n[17]),
                        (n[17] = o * e[_ + -252 + 7]),
                        (o = -n[20] + n[24]),
                        (n[20] += n[24]),
                        (n[24] = o * e[_ + -216 + 7]),
                        (o = -n[21] + n[25]),
                        (n[21] += n[25]),
                        (n[25] = o * e[_ + -216 + 7]),
                        (o = n[4] - n[8]),
                        (n[4] += n[8]),
                        (n[8] = o * e[_ + -216 + 7]),
                        (o = n[5] - n[9]),
                        (n[5] += n[9]),
                        (n[9] = o * e[_ + -216 + 7]),
                        (o = n[0] - n[12]),
                        (n[0] += n[12]),
                        (n[12] = o * e[_ + -72 + 7]),
                        (o = n[1] - n[13]),
                        (n[1] += n[13]),
                        (n[13] = o * e[_ + -72 + 7]),
                        (o = n[16] - n[28]),
                        (n[16] += n[28]),
                        (n[28] = o * e[_ + -72 + 7]),
                        (o = -n[17] + n[29]),
                        (n[17] += n[29]),
                        (n[29] = o * e[_ + -72 + 7]),
                        (o = r.SQRT2 * (n[2] - n[10])),
                        (n[2] += n[10]),
                        (n[10] = o),
                        (o = r.SQRT2 * (n[3] - n[11])),
                        (n[3] += n[11]),
                        (n[11] = o),
                        (o = r.SQRT2 * (-n[18] + n[26])),
                        (n[18] += n[26]),
                        (n[26] = o - n[18]),
                        (o = r.SQRT2 * (-n[19] + n[27])),
                        (n[19] += n[27]),
                        (n[27] = o - n[19]),
                        (o = n[2]),
                        (n[19] -= n[3]),
                        (n[3] -= o),
                        (n[2] = n[31] - o),
                        (n[31] += o),
                        (o = n[3]),
                        (n[11] -= n[19]),
                        (n[18] -= o),
                        (n[3] = n[30] - o),
                        (n[30] += o),
                        (o = n[18]),
                        (n[27] -= n[11]),
                        (n[19] -= o),
                        (n[18] = n[15] - o),
                        (n[15] += o),
                        (o = n[19]),
                        (n[10] -= o),
                        (n[19] = n[14] - o),
                        (n[14] += o),
                        (o = n[10]),
                        (n[11] -= o),
                        (n[10] = n[23] - o),
                        (n[23] += o),
                        (o = n[11]),
                        (n[26] -= o),
                        (n[11] = n[22] - o),
                        (n[22] += o),
                        (o = n[26]),
                        (n[27] -= o),
                        (n[26] = n[7] - o),
                        (n[7] += o),
                        (o = n[27]),
                        (n[27] = n[6] - o),
                        (n[6] += o),
                        (o = r.SQRT2 * (n[0] - n[4])),
                        (n[0] += n[4]),
                        (n[4] = o),
                        (o = r.SQRT2 * (n[1] - n[5])),
                        (n[1] += n[5]),
                        (n[5] = o),
                        (o = r.SQRT2 * (n[16] - n[20])),
                        (n[16] += n[20]),
                        (n[20] = o),
                        (o = r.SQRT2 * (n[17] - n[21])),
                        (n[17] += n[21]),
                        (n[21] = o),
                        (o = -r.SQRT2 * (n[8] - n[12])),
                        (n[8] += n[12]),
                        (n[12] = o - n[8]),
                        (o = -r.SQRT2 * (n[9] - n[13])),
                        (n[9] += n[13]),
                        (n[13] = o - n[9]),
                        (o = -r.SQRT2 * (n[25] - n[29])),
                        (n[25] += n[29]),
                        (n[29] = o - n[25]),
                        (o = -r.SQRT2 * (n[24] + n[28])),
                        (n[24] -= n[28]),
                        (n[28] = o - n[24]),
                        (o = n[24] - n[16]),
                        (n[24] = o),
                        (o = n[20] - o),
                        (n[20] = o),
                        (o = n[28] - o),
                        (n[28] = o),
                        (o = n[25] - n[17]),
                        (n[25] = o),
                        (o = n[21] - o),
                        (n[21] = o),
                        (o = n[29] - o),
                        (n[29] = o),
                        (o = n[17] - n[1]),
                        (n[17] = o),
                        (o = n[9] - o),
                        (n[9] = o),
                        (o = n[25] - o),
                        (n[25] = o),
                        (o = n[5] - o),
                        (n[5] = o),
                        (o = n[21] - o),
                        (n[21] = o),
                        (o = n[13] - o),
                        (n[13] = o),
                        (o = n[29] - o),
                        (n[29] = o),
                        (o = n[1] - n[0]),
                        (n[1] = o),
                        (o = n[16] - o),
                        (n[16] = o),
                        (o = n[17] - o),
                        (n[17] = o),
                        (o = n[8] - o),
                        (n[8] = o),
                        (o = n[9] - o),
                        (n[9] = o),
                        (o = n[24] - o),
                        (n[24] = o),
                        (o = n[25] - o),
                        (n[25] = o),
                        (o = n[4] - o),
                        (n[4] = o),
                        (o = n[5] - o),
                        (n[5] = o),
                        (o = n[20] - o),
                        (n[20] = o),
                        (o = n[21] - o),
                        (n[21] = o),
                        (o = n[12] - o),
                        (n[12] = o),
                        (o = n[13] - o),
                        (n[13] = o),
                        (o = n[28] - o),
                        (n[28] = o),
                        (o = n[29] - o),
                        (n[29] = o),
                        (o = n[0]),
                        (n[0] += n[31]),
                        (n[31] -= o),
                        (o = n[1]),
                        (n[1] += n[30]),
                        (n[30] -= o),
                        (o = n[16]),
                        (n[16] += n[15]),
                        (n[15] -= o),
                        (o = n[17]),
                        (n[17] += n[14]),
                        (n[14] -= o),
                        (o = n[8]),
                        (n[8] += n[23]),
                        (n[23] -= o),
                        (o = n[9]),
                        (n[9] += n[22]),
                        (n[22] -= o),
                        (o = n[24]),
                        (n[24] += n[7]),
                        (n[7] -= o),
                        (o = n[25]),
                        (n[25] += n[6]),
                        (n[6] -= o),
                        (o = n[4]),
                        (n[4] += n[27]),
                        (n[27] -= o),
                        (o = n[5]),
                        (n[5] += n[26]),
                        (n[26] -= o),
                        (o = n[20]),
                        (n[20] += n[11]),
                        (n[11] -= o),
                        (o = n[21]),
                        (n[21] += n[10]),
                        (n[10] -= o),
                        (o = n[12]),
                        (n[12] += n[19]),
                        (n[19] -= o),
                        (o = n[13]),
                        (n[13] += n[18]),
                        (n[18] -= o),
                        (o = n[28]),
                        (n[28] += n[3]),
                        (n[3] -= o),
                        (o = n[29]),
                        (n[29] += n[2]),
                        (n[2] -= o);
                }
                function h(e, a) {
                    for (var n = 0; n < 3; n++) {
                        var s, r, i, o, l, f;
                        (r =
                            (o = e[a + 6] * t[_.SHORT_TYPE][0] - e[a + 15]) +
                            (s = e[a + 0] * t[_.SHORT_TYPE][2] - e[a + 9])),
                            (i = o - s),
                            (l =
                                (o =
                                    e[a + 15] * t[_.SHORT_TYPE][0] + e[a + 6]) +
                                (s = e[a + 9] * t[_.SHORT_TYPE][2] + e[a + 0])),
                            (f = -o + s),
                            (s =
                                2069978111953089e-26 *
                                (e[a + 3] * t[_.SHORT_TYPE][1] - e[a + 12])),
                            (o =
                                2069978111953089e-26 *
                                (e[a + 12] * t[_.SHORT_TYPE][1] + e[a + 3])),
                            (e[a + 0] = 190752519173728e-25 * r + s),
                            (e[a + 15] = 190752519173728e-25 * -l + o),
                            (i = 0.8660254037844387 * i * 1907525191737281e-26),
                            (l = 0.5 * l * 1907525191737281e-26 + o),
                            (e[a + 3] = i - l),
                            (e[a + 6] = i + l),
                            (r = 0.5 * r * 1907525191737281e-26 - s),
                            (f = 0.8660254037844387 * f * 1907525191737281e-26),
                            (e[a + 9] = r + f),
                            (e[a + 12] = r - f),
                            a++;
                    }
                }
                this.mdct_sub48 = function (e, r, p) {
                    for (
                        var b,
                            m,
                            d,
                            v,
                            g,
                            S,
                            w,
                            M,
                            A,
                            y,
                            R,
                            B,
                            E,
                            T,
                            x,
                            k,
                            P,
                            I,
                            V,
                            O,
                            L,
                            H = r,
                            N = 286,
                            D = 0;
                        D < e.channels_out;
                        D++
                    ) {
                        for (var X = 0; X < e.mode_gr; X++) {
                            for (
                                var C,
                                    F = e.l3_side.tt[X][D],
                                    q = F.xr,
                                    Y = 0,
                                    j = e.sb_sample[D][1 - X],
                                    U = 0,
                                    z = 0;
                                z < 9;
                                z++
                            )
                                for (
                                    u(H, N, j[U]),
                                        u(H, N + 32, j[U + 1]),
                                        U += 2,
                                        N += 64,
                                        C = 1;
                                    C < 32;
                                    C += 2
                                )
                                    j[U - 1][C] *= -1;
                            for (C = 0; C < 32; C++, Y += 18) {
                                var G = F.block_type,
                                    K = e.sb_sample[D][X],
                                    Z = e.sb_sample[D][1 - X];
                                if (
                                    (0 != F.mixed_block_flag &&
                                        C < 2 &&
                                        (G = 0),
                                    e.amp_filter[C] < 1e-12)
                                )
                                    i.fill(q, Y + 0, Y + 18, 0);
                                else {
                                    if (e.amp_filter[C] < 1)
                                        for (z = 0; z < 18; z++)
                                            Z[z][c[C]] *= e.amp_filter[C];
                                    if (G == _.SHORT_TYPE) {
                                        for (z = -3; z < 0; z++) {
                                            var W = t[_.SHORT_TYPE][z + 3];
                                            (q[Y + 3 * z + 9] =
                                                K[9 + z][c[C]] * W -
                                                K[8 - z][c[C]]),
                                                (q[Y + 3 * z + 18] =
                                                    K[14 - z][c[C]] * W +
                                                    K[15 + z][c[C]]),
                                                (q[Y + 3 * z + 10] =
                                                    K[15 + z][c[C]] * W -
                                                    K[14 - z][c[C]]),
                                                (q[Y + 3 * z + 19] =
                                                    Z[2 - z][c[C]] * W +
                                                    Z[3 + z][c[C]]),
                                                (q[Y + 3 * z + 11] =
                                                    Z[3 + z][c[C]] * W -
                                                    Z[2 - z][c[C]]),
                                                (q[Y + 3 * z + 20] =
                                                    Z[8 - z][c[C]] * W +
                                                    Z[9 + z][c[C]]);
                                        }
                                        h(q, Y);
                                    } else {
                                        var Q = o(18);
                                        for (z = -9; z < 0; z++) {
                                            var J, $;
                                            (J =
                                                t[G][z + 27] * Z[z + 9][c[C]] +
                                                t[G][z + 36] * Z[8 - z][c[C]]),
                                                ($ =
                                                    t[G][z + 9] *
                                                        K[z + 9][c[C]] -
                                                    t[G][z + 18] *
                                                        K[8 - z][c[C]]),
                                                (Q[z + 9] =
                                                    J - $ * a[3 + z + 9]),
                                                (Q[z + 18] =
                                                    J * a[3 + z + 9] + $);
                                        }
                                        (b = q),
                                            (m = Y),
                                            (v = void 0),
                                            (g = void 0),
                                            (S = void 0),
                                            (w = void 0),
                                            (M = void 0),
                                            (A = void 0),
                                            (y = void 0),
                                            (R = void 0),
                                            (B = void 0),
                                            (E = void 0),
                                            (T = void 0),
                                            (x = void 0),
                                            (k = void 0),
                                            (P = void 0),
                                            (I = void 0),
                                            (V = void 0),
                                            (O = void 0),
                                            (L = void 0),
                                            (S = (d = Q)[17] - d[9]),
                                            (M = d[15] - d[11]),
                                            (A = d[14] - d[12]),
                                            (y = d[0] + d[8]),
                                            (R = d[1] + d[7]),
                                            (B = d[2] + d[6]),
                                            (E = d[3] + d[5]),
                                            (b[m + 17] =
                                                y + B - E - (R - d[4])),
                                            (g =
                                                (y + B - E) * n[19] +
                                                (R - d[4])),
                                            (v = (S - M - A) * n[18]),
                                            (b[m + 5] = v + g),
                                            (b[m + 6] = v - g),
                                            (w = (d[16] - d[10]) * n[18]),
                                            (R = R * n[19] + d[4]),
                                            (v =
                                                S * n[12] +
                                                w +
                                                M * n[13] +
                                                A * n[14]),
                                            (g =
                                                -y * n[16] +
                                                R -
                                                B * n[17] +
                                                E * n[15]),
                                            (b[m + 1] = v + g),
                                            (b[m + 2] = v - g),
                                            (v =
                                                S * n[13] -
                                                w -
                                                M * n[14] +
                                                A * n[12]),
                                            (g =
                                                -y * n[17] +
                                                R -
                                                B * n[15] +
                                                E * n[16]),
                                            (b[m + 9] = v + g),
                                            (b[m + 10] = v - g),
                                            (v =
                                                S * n[14] -
                                                w +
                                                M * n[12] -
                                                A * n[13]),
                                            (g =
                                                y * n[15] -
                                                R +
                                                B * n[16] -
                                                E * n[17]),
                                            (b[m + 13] = v + g),
                                            (b[m + 14] = v - g),
                                            (T = d[8] - d[0]),
                                            (k = d[6] - d[2]),
                                            (P = d[5] - d[3]),
                                            (I = d[17] + d[9]),
                                            (V = d[16] + d[10]),
                                            (O = d[15] + d[11]),
                                            (L = d[14] + d[12]),
                                            (b[m + 0] =
                                                I + O + L + (V + d[13])),
                                            (v =
                                                (I + O + L) * n[19] -
                                                (V + d[13])),
                                            (g = (T - k + P) * n[18]),
                                            (b[m + 11] = v + g),
                                            (b[m + 12] = v - g),
                                            (x = (d[7] - d[1]) * n[18]),
                                            (V = d[13] - V * n[19]),
                                            (v =
                                                I * n[15] -
                                                V +
                                                O * n[16] +
                                                L * n[17]),
                                            (g =
                                                T * n[14] +
                                                x +
                                                k * n[12] +
                                                P * n[13]),
                                            (b[m + 3] = v + g),
                                            (b[m + 4] = v - g),
                                            (v =
                                                -I * n[17] +
                                                V -
                                                O * n[15] -
                                                L * n[16]),
                                            (g =
                                                T * n[13] +
                                                x -
                                                k * n[14] -
                                                P * n[12]),
                                            (b[m + 7] = v + g),
                                            (b[m + 8] = v - g),
                                            (v =
                                                -I * n[16] +
                                                V -
                                                O * n[17] -
                                                L * n[15]),
                                            (g =
                                                T * n[12] -
                                                x +
                                                k * n[13] -
                                                P * n[14]),
                                            (b[m + 15] = v + g),
                                            (b[m + 16] = v - g);
                                    }
                                }
                                if (G != _.SHORT_TYPE && 0 != C)
                                    for (z = 7; z >= 0; --z) {
                                        var ee, te;
                                        (ee =
                                            q[Y + z] * l[20 + z] +
                                            q[Y + -1 - z] * f[28 + z]),
                                            (te =
                                                q[Y + z] * f[28 + z] -
                                                q[Y + -1 - z] * l[20 + z]),
                                            (q[Y + -1 - z] = ee),
                                            (q[Y + z] = te);
                                    }
                            }
                        }
                        if (((H = p), (N = 286), 1 == e.mode_gr))
                            for (var ae = 0; ae < 18; ae++)
                                s.arraycopy(
                                    e.sb_sample[D][1][ae],
                                    0,
                                    e.sb_sample[D][0][ae],
                                    0,
                                    32
                                );
                    }
                };
            };
        },
        function (e, t, a) {
            var n = a(11);
            e.exports = function () {
                (this.thm = new n()), (this.en = new n());
            };
        },
        function (e, t, a) {
            var n = a(2);
            e.exports = function () {
                (this.class_id = 0),
                    (this.num_samples = 0),
                    (this.num_channels = 0),
                    (this.in_samplerate = 0),
                    (this.out_samplerate = 0),
                    (this.scale = 0),
                    (this.scale_left = 0),
                    (this.scale_right = 0),
                    (this.analysis = !1),
                    (this.bWriteVbrTag = !1),
                    (this.decode_only = !1),
                    (this.quality = 0),
                    (this.mode = n.STEREO),
                    (this.force_ms = !1),
                    (this.free_format = !1),
                    (this.findReplayGain = !1),
                    (this.decode_on_the_fly = !1),
                    (this.write_id3tag_automatic = !1),
                    (this.brate = 0),
                    (this.compression_ratio = 0),
                    (this.copyright = 0),
                    (this.original = 0),
                    (this.extension = 0),
                    (this.emphasis = 0),
                    (this.error_protection = 0),
                    (this.strict_ISO = !1),
                    (this.disable_reservoir = !1),
                    (this.quant_comp = 0),
                    (this.quant_comp_short = 0),
                    (this.experimentalY = !1),
                    (this.experimentalZ = 0),
                    (this.exp_nspsytune = 0),
                    (this.preset = 0),
                    (this.VBR = null),
                    (this.VBR_q_frac = 0),
                    (this.VBR_q = 0),
                    (this.VBR_mean_bitrate_kbps = 0),
                    (this.VBR_min_bitrate_kbps = 0),
                    (this.VBR_max_bitrate_kbps = 0),
                    (this.VBR_hard_min = 0),
                    (this.lowpassfreq = 0),
                    (this.highpassfreq = 0),
                    (this.lowpasswidth = 0),
                    (this.highpasswidth = 0),
                    (this.maskingadjust = 0),
                    (this.maskingadjust_short = 0),
                    (this.ATHonly = !1),
                    (this.ATHshort = !1),
                    (this.noATH = !1),
                    (this.ATHtype = 0),
                    (this.ATHcurve = 0),
                    (this.ATHlower = 0),
                    (this.athaa_type = 0),
                    (this.athaa_loudapprox = 0),
                    (this.athaa_sensitivity = 0),
                    (this.short_blocks = null),
                    (this.useTemporal = !1),
                    (this.interChRatio = 0),
                    (this.msfix = 0),
                    (this.tune = !1),
                    (this.tune_value_a = 0),
                    (this.version = 0),
                    (this.encoder_delay = 0),
                    (this.encoder_padding = 0),
                    (this.framesize = 0),
                    (this.frameNum = 0),
                    (this.lame_allocated_gfp = 0),
                    (this.internal_flags = null);
            };
        },
        function (e, t, a) {
            var n = a(0),
                s =
                    (n.System,
                    n.VbrMode,
                    n.Float,
                    n.ShortBlock,
                    n.Util,
                    n.Arrays,
                    n.new_array_n,
                    n.new_byte,
                    n.new_double,
                    n.new_float,
                    n.new_float_n,
                    n.new_int),
                r = (n.new_int_n, n.assert, a(6));
            e.exports = function () {
                (this.tt = [
                    [null, null],
                    [null, null],
                ]),
                    (this.main_data_begin = 0),
                    (this.private_bits = 0),
                    (this.resvDrain_pre = 0),
                    (this.resvDrain_post = 0),
                    (this.scfsi = [s(4), s(4)]);
                for (var e = 0; e < 2; e++)
                    for (var t = 0; t < 2; t++) this.tt[e][t] = new r();
            };
        },
        function (e, t, a) {
            var n = a(0),
                s =
                    (n.System,
                    n.VbrMode,
                    n.Float,
                    n.ShortBlock,
                    n.Util,
                    n.Arrays,
                    n.new_array_n,
                    n.new_byte,
                    n.new_double,
                    n.new_float),
                r = n.new_float_n,
                i = n.new_int,
                o = (n.new_int_n, n.assert, a(1));
            e.exports = function () {
                (this.last_en_subshort = r([4, 9])),
                    (this.lastAttacks = i(4)),
                    (this.pefirbuf = s(19)),
                    (this.longfact = s(o.SBMAX_l)),
                    (this.shortfact = s(o.SBMAX_s)),
                    (this.attackthre = 0),
                    (this.attackthre_s = 0);
            };
        },
        function (e, t) {
            e.exports = function () {
                (this.sum = 0),
                    (this.seen = 0),
                    (this.want = 0),
                    (this.pos = 0),
                    (this.size = 0),
                    (this.bag = null),
                    (this.nVbrNumFrames = 0),
                    (this.nBytesWritten = 0),
                    (this.TotalFrameSize = 0);
            };
        },
        function (e, t, a) {
            var n = a(0),
                s =
                    (n.System,
                    n.VbrMode,
                    n.Float,
                    n.ShortBlock,
                    n.Util,
                    n.Arrays,
                    n.new_array_n,
                    n.new_byte,
                    n.new_double,
                    n.new_float),
                r = (n.new_float_n, n.new_int, n.new_int_n, n.assert, a(1));
            e.exports = function () {
                (this.useAdjust = 0),
                    (this.aaSensitivityP = 0),
                    (this.adjust = 0),
                    (this.adjustLimit = 0),
                    (this.decay = 0),
                    (this.floor = 0),
                    (this.l = s(r.SBMAX_l)),
                    (this.s = s(r.SBMAX_s)),
                    (this.psfb21 = s(r.PSFB21)),
                    (this.psfb12 = s(r.PSFB12)),
                    (this.cb_l = s(r.CBANDS)),
                    (this.cb_s = s(r.CBANDS)),
                    (this.eql_w = s(r.BLKSIZE / 2));
            };
        },
        function (e, t, a) {
            var n = a(0),
                s =
                    (n.System,
                    n.VbrMode,
                    n.Float,
                    n.ShortBlock,
                    n.Util,
                    n.Arrays,
                    n.new_array_n,
                    n.new_byte,
                    n.new_double,
                    n.new_float),
                r = (n.new_float_n, n.new_int),
                i = (n.new_int_n, n.assert, a(13));
            e.exports = function () {
                (this.linprebuf = s(2 * i.MAX_ORDER)),
                    (this.linpre = 0),
                    (this.lstepbuf = s(i.MAX_SAMPLES_PER_WINDOW + i.MAX_ORDER)),
                    (this.lstep = 0),
                    (this.loutbuf = s(i.MAX_SAMPLES_PER_WINDOW + i.MAX_ORDER)),
                    (this.lout = 0),
                    (this.rinprebuf = s(2 * i.MAX_ORDER)),
                    (this.rinpre = 0),
                    (this.rstepbuf = s(i.MAX_SAMPLES_PER_WINDOW + i.MAX_ORDER)),
                    (this.rstep = 0),
                    (this.routbuf = s(i.MAX_SAMPLES_PER_WINDOW + i.MAX_ORDER)),
                    (this.rout = 0),
                    (this.sampleWindow = 0),
                    (this.totsamp = 0),
                    (this.lsum = 0),
                    (this.rsum = 0),
                    (this.freqindex = 0),
                    (this.first = 0),
                    (this.A = r(0 | (i.STEPS_per_dB * i.MAX_dB))),
                    (this.B = r(0 | (i.STEPS_per_dB * i.MAX_dB)));
            };
        },
        function (e, t, a) {
            var n = a(0),
                s =
                    (n.System,
                    n.VbrMode,
                    n.Float,
                    n.ShortBlock,
                    n.Util,
                    n.Arrays,
                    n.new_array_n,
                    n.new_byte,
                    n.new_double,
                    n.new_float),
                r = (n.new_float_n, n.new_int),
                i = (n.new_int_n, n.assert),
                o = a(14),
                _ = a(1),
                l = a(4),
                f = a(3);
            e.exports = function (e) {
                var t = e;
                (this.quantize = t),
                    (this.iteration_loop = function (e, t, a, n) {
                        var c,
                            u = e.internal_flags,
                            h = s(l.SFBMAX),
                            p = s(576),
                            b = r(2),
                            m = 0,
                            d = u.l3_side,
                            v = new o(m);
                        this.quantize.rv.ResvFrameBegin(e, v), (m = v.bits);
                        for (var g = 0; g < u.mode_gr; g++) {
                            (c = this.quantize.qupvt.on_pe(e, t, b, m, g, g)),
                                u.mode_ext == _.MPG_MD_MS_LR &&
                                    (this.quantize.ms_convert(u.l3_side, g),
                                    this.quantize.qupvt.reduce_side(
                                        b,
                                        a[g],
                                        m,
                                        c
                                    ));
                            for (var S = 0; S < u.channels_out; S++) {
                                var w,
                                    M,
                                    A = d.tt[g][S];
                                A.block_type != _.SHORT_TYPE
                                    ? ((w = 0), (M = u.PSY.mask_adjust - w))
                                    : ((w = 0),
                                      (M = u.PSY.mask_adjust_short - w)),
                                    (u.masking_lower = Math.pow(10, 0.1 * M)),
                                    this.quantize.init_outer_loop(u, A),
                                    this.quantize.init_xrpow(u, A, p) &&
                                        (this.quantize.qupvt.calc_xmin(
                                            e,
                                            n[g][S],
                                            A,
                                            h
                                        ),
                                        this.quantize.outer_loop(
                                            e,
                                            A,
                                            h,
                                            p,
                                            S,
                                            b[S]
                                        )),
                                    this.quantize.iteration_finish_one(u, g, S),
                                    i(
                                        A.part2_3_length <=
                                            f.MAX_BITS_PER_CHANNEL
                                    ),
                                    i(A.part2_3_length <= b[S]);
                            }
                        }
                        this.quantize.rv.ResvFrameEnd(u, m);
                    });
            };
        },
        function (e, t, a) {
            var n = a(0),
                s = (n.System, n.VbrMode);
            n.Float,
                n.ShortBlock,
                n.Util,
                n.Arrays,
                n.new_array_n,
                n.new_byte,
                n.new_double,
                n.new_float,
                n.new_float_n,
                n.new_int,
                n.new_int_n,
                n.assert;
            e.exports = function () {
                var e,
                    t = a(5);
                function n(e, t, a, n, s, r, i, o, _, l, f, c, u, h, p) {
                    (this.vbr_q = e),
                        (this.quant_comp = t),
                        (this.quant_comp_s = a),
                        (this.expY = n),
                        (this.st_lrm = s),
                        (this.st_s = r),
                        (this.masking_adj = i),
                        (this.masking_adj_short = o),
                        (this.ath_lower = _),
                        (this.ath_curve = l),
                        (this.ath_sensitivity = f),
                        (this.interch = c),
                        (this.safejoint = u),
                        (this.sfb21mod = h),
                        (this.msfix = p);
                }
                function r(e, t, a, n, s, r, i, o, _, l, f, c, u, h) {
                    (this.quant_comp = t),
                        (this.quant_comp_s = a),
                        (this.safejoint = n),
                        (this.nsmsfix = s),
                        (this.st_lrm = r),
                        (this.st_s = i),
                        (this.nsbass = o),
                        (this.scale = _),
                        (this.masking_adj = l),
                        (this.ath_lower = f),
                        (this.ath_curve = c),
                        (this.interch = u),
                        (this.sfscale = h);
                }
                this.setModules = function (t) {
                    e = t;
                };
                var i = [
                        new n(
                            0,
                            9,
                            9,
                            0,
                            5.2,
                            125,
                            -4.2,
                            -6.3,
                            4.8,
                            1,
                            0,
                            0,
                            2,
                            21,
                            0.97
                        ),
                        new n(
                            1,
                            9,
                            9,
                            0,
                            5.3,
                            125,
                            -3.6,
                            -5.6,
                            4.5,
                            1.5,
                            0,
                            0,
                            2,
                            21,
                            1.35
                        ),
                        new n(
                            2,
                            9,
                            9,
                            0,
                            5.6,
                            125,
                            -2.2,
                            -3.5,
                            2.8,
                            2,
                            0,
                            0,
                            2,
                            21,
                            1.49
                        ),
                        new n(
                            3,
                            9,
                            9,
                            1,
                            5.8,
                            130,
                            -1.8,
                            -2.8,
                            2.6,
                            3,
                            -4,
                            0,
                            2,
                            20,
                            1.64
                        ),
                        new n(
                            4,
                            9,
                            9,
                            1,
                            6,
                            135,
                            -0.7,
                            -1.1,
                            1.1,
                            3.5,
                            -8,
                            0,
                            2,
                            0,
                            1.79
                        ),
                        new n(
                            5,
                            9,
                            9,
                            1,
                            6.4,
                            140,
                            0.5,
                            0.4,
                            -7.5,
                            4,
                            -12,
                            2e-4,
                            0,
                            0,
                            1.95
                        ),
                        new n(
                            6,
                            9,
                            9,
                            1,
                            6.6,
                            145,
                            0.67,
                            0.65,
                            -14.7,
                            6.5,
                            -19,
                            4e-4,
                            0,
                            0,
                            2.3
                        ),
                        new n(
                            7,
                            9,
                            9,
                            1,
                            6.6,
                            145,
                            0.8,
                            0.75,
                            -19.7,
                            8,
                            -22,
                            6e-4,
                            0,
                            0,
                            2.7
                        ),
                        new n(
                            8,
                            9,
                            9,
                            1,
                            6.6,
                            145,
                            1.2,
                            1.15,
                            -27.5,
                            10,
                            -23,
                            7e-4,
                            0,
                            0,
                            0
                        ),
                        new n(
                            9,
                            9,
                            9,
                            1,
                            6.6,
                            145,
                            1.6,
                            1.6,
                            -36,
                            11,
                            -25,
                            8e-4,
                            0,
                            0,
                            0
                        ),
                        new n(
                            10,
                            9,
                            9,
                            1,
                            6.6,
                            145,
                            2,
                            2,
                            -36,
                            12,
                            -25,
                            8e-4,
                            0,
                            0,
                            0
                        ),
                    ],
                    o = [
                        new n(
                            0,
                            9,
                            9,
                            0,
                            4.2,
                            25,
                            -7,
                            -4,
                            7.5,
                            1,
                            0,
                            0,
                            2,
                            26,
                            0.97
                        ),
                        new n(
                            1,
                            9,
                            9,
                            0,
                            4.2,
                            25,
                            -5.6,
                            -3.6,
                            4.5,
                            1.5,
                            0,
                            0,
                            2,
                            21,
                            1.35
                        ),
                        new n(
                            2,
                            9,
                            9,
                            0,
                            4.2,
                            25,
                            -4.4,
                            -1.8,
                            2,
                            2,
                            0,
                            0,
                            2,
                            18,
                            1.49
                        ),
                        new n(
                            3,
                            9,
                            9,
                            1,
                            4.2,
                            25,
                            -3.4,
                            -1.25,
                            1.1,
                            3,
                            -4,
                            0,
                            2,
                            15,
                            1.64
                        ),
                        new n(
                            4,
                            9,
                            9,
                            1,
                            4.2,
                            25,
                            -2.2,
                            0.1,
                            0,
                            3.5,
                            -8,
                            0,
                            2,
                            0,
                            1.79
                        ),
                        new n(
                            5,
                            9,
                            9,
                            1,
                            4.2,
                            25,
                            -1,
                            1.65,
                            -7.7,
                            4,
                            -12,
                            2e-4,
                            0,
                            0,
                            1.95
                        ),
                        new n(
                            6,
                            9,
                            9,
                            1,
                            4.2,
                            25,
                            -0,
                            2.47,
                            -7.7,
                            6.5,
                            -19,
                            4e-4,
                            0,
                            0,
                            2
                        ),
                        new n(
                            7,
                            9,
                            9,
                            1,
                            4.2,
                            25,
                            0.5,
                            2,
                            -14.5,
                            8,
                            -22,
                            6e-4,
                            0,
                            0,
                            2
                        ),
                        new n(
                            8,
                            9,
                            9,
                            1,
                            4.2,
                            25,
                            1,
                            2.4,
                            -22,
                            10,
                            -23,
                            7e-4,
                            0,
                            0,
                            2
                        ),
                        new n(
                            9,
                            9,
                            9,
                            1,
                            4.2,
                            25,
                            1.5,
                            2.95,
                            -30,
                            11,
                            -25,
                            8e-4,
                            0,
                            0,
                            2
                        ),
                        new n(
                            10,
                            9,
                            9,
                            1,
                            4.2,
                            25,
                            2,
                            2.95,
                            -36,
                            12,
                            -30,
                            8e-4,
                            0,
                            0,
                            2
                        ),
                    ];
                function _(e, t, a) {
                    var n = e.VBR == s.vbr_rh ? i : o,
                        r = e.VBR_q_frac,
                        _ = n[t],
                        l = n[t + 1],
                        f = _;
                    (_.st_lrm = _.st_lrm + r * (l.st_lrm - _.st_lrm)),
                        (_.st_s = _.st_s + r * (l.st_s - _.st_s)),
                        (_.masking_adj =
                            _.masking_adj +
                            r * (l.masking_adj - _.masking_adj)),
                        (_.masking_adj_short =
                            _.masking_adj_short +
                            r * (l.masking_adj_short - _.masking_adj_short)),
                        (_.ath_lower =
                            _.ath_lower + r * (l.ath_lower - _.ath_lower)),
                        (_.ath_curve =
                            _.ath_curve + r * (l.ath_curve - _.ath_curve)),
                        (_.ath_sensitivity =
                            _.ath_sensitivity +
                            r * (l.ath_sensitivity - _.ath_sensitivity)),
                        (_.interch = _.interch + r * (l.interch - _.interch)),
                        (_.msfix = _.msfix + r * (l.msfix - _.msfix)),
                        (function (e, t) {
                            var a = 0;
                            0 > t && ((a = -1), (t = 0));
                            9 < t && ((a = -1), (t = 9));
                            (e.VBR_q = t), (e.VBR_q_frac = 0);
                        })(e, f.vbr_q),
                        0 != a
                            ? (e.quant_comp = f.quant_comp)
                            : Math.abs(e.quant_comp - -1) > 0 ||
                              (e.quant_comp = f.quant_comp),
                        0 != a
                            ? (e.quant_comp_short = f.quant_comp_s)
                            : Math.abs(e.quant_comp_short - -1) > 0 ||
                              (e.quant_comp_short = f.quant_comp_s),
                        0 != f.expY && (e.experimentalY = 0 != f.expY),
                        0 != a
                            ? (e.internal_flags.nsPsy.attackthre = f.st_lrm)
                            : Math.abs(e.internal_flags.nsPsy.attackthre - -1) >
                                  0 ||
                              (e.internal_flags.nsPsy.attackthre = f.st_lrm),
                        0 != a
                            ? (e.internal_flags.nsPsy.attackthre_s = f.st_s)
                            : Math.abs(
                                  e.internal_flags.nsPsy.attackthre_s - -1
                              ) > 0 ||
                              (e.internal_flags.nsPsy.attackthre_s = f.st_s),
                        0 != a
                            ? (e.maskingadjust = f.masking_adj)
                            : Math.abs(e.maskingadjust - 0) > 0 ||
                              (e.maskingadjust = f.masking_adj),
                        0 != a
                            ? (e.maskingadjust_short = f.masking_adj_short)
                            : Math.abs(e.maskingadjust_short - 0) > 0 ||
                              (e.maskingadjust_short = f.masking_adj_short),
                        0 != a
                            ? (e.ATHlower = -f.ath_lower / 10)
                            : Math.abs(10 * -e.ATHlower - 0) > 0 ||
                              (e.ATHlower = -f.ath_lower / 10),
                        0 != a
                            ? (e.ATHcurve = f.ath_curve)
                            : Math.abs(e.ATHcurve - -1) > 0 ||
                              (e.ATHcurve = f.ath_curve),
                        0 != a
                            ? (e.athaa_sensitivity = f.ath_sensitivity)
                            : Math.abs(e.athaa_sensitivity - -1) > 0 ||
                              (e.athaa_sensitivity = f.ath_sensitivity),
                        f.interch > 0 &&
                            (0 != a
                                ? (e.interChRatio = f.interch)
                                : Math.abs(e.interChRatio - -1) > 0 ||
                                  (e.interChRatio = f.interch)),
                        f.safejoint > 0 &&
                            (e.exp_nspsytune = e.exp_nspsytune | f.safejoint),
                        f.sfb21mod > 0 &&
                            (e.exp_nspsytune =
                                e.exp_nspsytune | (f.sfb21mod << 20)),
                        0 != a
                            ? (e.msfix = f.msfix)
                            : Math.abs(e.msfix - -1) > 0 || (e.msfix = f.msfix),
                        0 == a && ((e.VBR_q = t), (e.VBR_q_frac = r));
                }
                var l = [
                    new r(
                        8,
                        9,
                        9,
                        0,
                        0,
                        6.6,
                        145,
                        0,
                        0.95,
                        0,
                        -30,
                        11,
                        0.0012,
                        1
                    ),
                    new r(
                        16,
                        9,
                        9,
                        0,
                        0,
                        6.6,
                        145,
                        0,
                        0.95,
                        0,
                        -25,
                        11,
                        0.001,
                        1
                    ),
                    new r(
                        24,
                        9,
                        9,
                        0,
                        0,
                        6.6,
                        145,
                        0,
                        0.95,
                        0,
                        -20,
                        11,
                        0.001,
                        1
                    ),
                    new r(
                        32,
                        9,
                        9,
                        0,
                        0,
                        6.6,
                        145,
                        0,
                        0.95,
                        0,
                        -15,
                        11,
                        0.001,
                        1
                    ),
                    new r(
                        40,
                        9,
                        9,
                        0,
                        0,
                        6.6,
                        145,
                        0,
                        0.95,
                        0,
                        -10,
                        11,
                        9e-4,
                        1
                    ),
                    new r(
                        48,
                        9,
                        9,
                        0,
                        0,
                        6.6,
                        145,
                        0,
                        0.95,
                        0,
                        -10,
                        11,
                        9e-4,
                        1
                    ),
                    new r(
                        56,
                        9,
                        9,
                        0,
                        0,
                        6.6,
                        145,
                        0,
                        0.95,
                        0,
                        -6,
                        11,
                        8e-4,
                        1
                    ),
                    new r(
                        64,
                        9,
                        9,
                        0,
                        0,
                        6.6,
                        145,
                        0,
                        0.95,
                        0,
                        -2,
                        11,
                        8e-4,
                        1
                    ),
                    new r(80, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, 0, 8, 7e-4, 1),
                    new r(
                        96,
                        9,
                        9,
                        0,
                        2.5,
                        6.6,
                        145,
                        0,
                        0.95,
                        0,
                        1,
                        5.5,
                        6e-4,
                        1
                    ),
                    new r(
                        112,
                        9,
                        9,
                        0,
                        2.25,
                        6.6,
                        145,
                        0,
                        0.95,
                        0,
                        2,
                        4.5,
                        5e-4,
                        1
                    ),
                    new r(
                        128,
                        9,
                        9,
                        0,
                        1.95,
                        6.4,
                        140,
                        0,
                        0.95,
                        0,
                        3,
                        4,
                        2e-4,
                        1
                    ),
                    new r(
                        160,
                        9,
                        9,
                        1,
                        1.79,
                        6,
                        135,
                        0,
                        0.95,
                        -2,
                        5,
                        3.5,
                        0,
                        1
                    ),
                    new r(
                        192,
                        9,
                        9,
                        1,
                        1.49,
                        5.6,
                        125,
                        0,
                        0.97,
                        -4,
                        7,
                        3,
                        0,
                        0
                    ),
                    new r(
                        224,
                        9,
                        9,
                        1,
                        1.25,
                        5.2,
                        125,
                        0,
                        0.98,
                        -6,
                        9,
                        2,
                        0,
                        0
                    ),
                    new r(256, 9, 9, 1, 0.97, 5.2, 125, 0, 1, -8, 10, 1, 0, 0),
                    new r(320, 9, 9, 1, 0.9, 5.2, 125, 0, 1, -10, 12, 0, 0, 0),
                ];
                function f(t, a, n) {
                    var r = a,
                        i = e.nearestBitrateFullIndex(a);
                    if (
                        ((t.VBR = s.vbr_abr),
                        (t.VBR_mean_bitrate_kbps = r),
                        (t.VBR_mean_bitrate_kbps = Math.min(
                            t.VBR_mean_bitrate_kbps,
                            320
                        )),
                        (t.VBR_mean_bitrate_kbps = Math.max(
                            t.VBR_mean_bitrate_kbps,
                            8
                        )),
                        (t.brate = t.VBR_mean_bitrate_kbps),
                        t.VBR_mean_bitrate_kbps > 320 &&
                            (t.disable_reservoir = !0),
                        l[i].safejoint > 0 &&
                            (t.exp_nspsytune = 2 | t.exp_nspsytune),
                        l[i].sfscale > 0 &&
                            (t.internal_flags.noise_shaping = 2),
                        Math.abs(l[i].nsbass) > 0)
                    ) {
                        var o = int(4 * l[i].nsbass);
                        o < 0 && (o += 64),
                            (t.exp_nspsytune = t.exp_nspsytune | (o << 2));
                    }
                    return (
                        0 != n
                            ? (t.quant_comp = l[i].quant_comp)
                            : Math.abs(t.quant_comp - -1) > 0 ||
                              (t.quant_comp = l[i].quant_comp),
                        0 != n
                            ? (t.quant_comp_short = l[i].quant_comp_s)
                            : Math.abs(t.quant_comp_short - -1) > 0 ||
                              (t.quant_comp_short = l[i].quant_comp_s),
                        0 != n
                            ? (t.msfix = l[i].nsmsfix)
                            : Math.abs(t.msfix - -1) > 0 ||
                              (t.msfix = l[i].nsmsfix),
                        0 != n
                            ? (t.internal_flags.nsPsy.attackthre = l[i].st_lrm)
                            : Math.abs(t.internal_flags.nsPsy.attackthre - -1) >
                                  0 ||
                              (t.internal_flags.nsPsy.attackthre = l[i].st_lrm),
                        0 != n
                            ? (t.internal_flags.nsPsy.attackthre_s = l[i].st_s)
                            : Math.abs(
                                  t.internal_flags.nsPsy.attackthre_s - -1
                              ) > 0 ||
                              (t.internal_flags.nsPsy.attackthre_s = l[i].st_s),
                        0 != n
                            ? (t.scale = l[i].scale)
                            : Math.abs(t.scale - -1) > 0 ||
                              (t.scale = l[i].scale),
                        0 != n
                            ? (t.maskingadjust = l[i].masking_adj)
                            : Math.abs(t.maskingadjust - 0) > 0 ||
                              (t.maskingadjust = l[i].masking_adj),
                        l[i].masking_adj > 0
                            ? 0 != n
                                ? (t.maskingadjust_short =
                                      0.9 * l[i].masking_adj)
                                : Math.abs(t.maskingadjust_short - 0) > 0 ||
                                  (t.maskingadjust_short =
                                      0.9 * l[i].masking_adj)
                            : 0 != n
                            ? (t.maskingadjust_short = 1.1 * l[i].masking_adj)
                            : Math.abs(t.maskingadjust_short - 0) > 0 ||
                              (t.maskingadjust_short = 1.1 * l[i].masking_adj),
                        0 != n
                            ? (t.ATHlower = -l[i].ath_lower / 10)
                            : Math.abs(10 * -t.ATHlower - 0) > 0 ||
                              (t.ATHlower = -l[i].ath_lower / 10),
                        0 != n
                            ? (t.ATHcurve = l[i].ath_curve)
                            : Math.abs(t.ATHcurve - -1) > 0 ||
                              (t.ATHcurve = l[i].ath_curve),
                        0 != n
                            ? (t.interChRatio = l[i].interch)
                            : Math.abs(t.interChRatio - -1) > 0 ||
                              (t.interChRatio = l[i].interch),
                        a
                    );
                }
                this.apply_preset = function (e, a, n) {
                    switch (a) {
                        case t.R3MIX:
                            (a = t.V3), (e.VBR = s.vbr_mtrh);
                            break;
                        case t.MEDIUM:
                            (a = t.V4), (e.VBR = s.vbr_rh);
                            break;
                        case t.MEDIUM_FAST:
                            (a = t.V4), (e.VBR = s.vbr_mtrh);
                            break;
                        case t.STANDARD:
                            (a = t.V2), (e.VBR = s.vbr_rh);
                            break;
                        case t.STANDARD_FAST:
                            (a = t.V2), (e.VBR = s.vbr_mtrh);
                            break;
                        case t.EXTREME:
                            (a = t.V0), (e.VBR = s.vbr_rh);
                            break;
                        case t.EXTREME_FAST:
                            (a = t.V0), (e.VBR = s.vbr_mtrh);
                            break;
                        case t.INSANE:
                            return (
                                (a = 320),
                                (e.preset = a),
                                f(e, a, n),
                                (e.VBR = s.vbr_off),
                                a
                            );
                    }
                    switch (((e.preset = a), a)) {
                        case t.V9:
                            return _(e, 9, n), a;
                        case t.V8:
                            return _(e, 8, n), a;
                        case t.V7:
                            return _(e, 7, n), a;
                        case t.V6:
                            return _(e, 6, n), a;
                        case t.V5:
                            return _(e, 5, n), a;
                        case t.V4:
                            return _(e, 4, n), a;
                        case t.V3:
                            return _(e, 3, n), a;
                        case t.V2:
                            return _(e, 2, n), a;
                        case t.V1:
                            return _(e, 1, n), a;
                        case t.V0:
                            return _(e, 0, n), a;
                    }
                    return 8 <= a && a <= 320
                        ? f(e, a, n)
                        : ((e.preset = 0), a);
                };
            };
        },
        function (e, t, a) {
            var n = a(0),
                s = n.System,
                r = n.VbrMode,
                i = (n.Float, n.ShortBlock, n.Util),
                o = n.Arrays,
                _ = (n.new_array_n, n.new_byte, n.new_double, n.new_float),
                l = (n.new_float_n, n.new_int, n.new_int_n, n.assert),
                f = a(32),
                c = a(33),
                u = a(34),
                h = a(1),
                p = a(6),
                b = a(4);
            e.exports = function () {
                var e, t, a;
                (this.rv = null), (this.qupvt = null);
                var n,
                    m = new f();
                function d(e) {
                    this.ordinal = e;
                }
                function v(e) {
                    for (var t = 0; t < e.sfbmax; t++)
                        if (e.scalefac[t] + e.subblock_gain[e.window[t]] == 0)
                            return !1;
                    return !0;
                }
                function g(e, t, a, n, s) {
                    var r;
                    switch (e) {
                        default:
                        case 9:
                            t.over_count > 0
                                ? ((r = a.over_SSD <= t.over_SSD),
                                  a.over_SSD == t.over_SSD &&
                                      (r = a.bits < t.bits))
                                : (r =
                                      a.max_noise < 0 &&
                                      10 * a.max_noise + a.bits <=
                                          10 * t.max_noise + t.bits);
                            break;
                        case 0:
                            r =
                                a.over_count < t.over_count ||
                                (a.over_count == t.over_count &&
                                    a.over_noise < t.over_noise) ||
                                (a.over_count == t.over_count &&
                                    BitStream.EQ(a.over_noise, t.over_noise) &&
                                    a.tot_noise < t.tot_noise);
                            break;
                        case 8:
                            a.max_noise = (function (e, t) {
                                for (var a, n = 1e-37, s = 0; s < t.psymax; s++)
                                    n +=
                                        ((a = e[s]),
                                        i.FAST_LOG10(
                                            0.368 + 0.632 * a * a * a
                                        ));
                                return Math.max(1e-20, n);
                            })(s, n);
                        case 1:
                            r = a.max_noise < t.max_noise;
                            break;
                        case 2:
                            r = a.tot_noise < t.tot_noise;
                            break;
                        case 3:
                            r =
                                a.tot_noise < t.tot_noise &&
                                a.max_noise < t.max_noise;
                            break;
                        case 4:
                            r =
                                (a.max_noise <= 0 && t.max_noise > 0.2) ||
                                (a.max_noise <= 0 &&
                                    t.max_noise < 0 &&
                                    t.max_noise > a.max_noise - 0.2 &&
                                    a.tot_noise < t.tot_noise) ||
                                (a.max_noise <= 0 &&
                                    t.max_noise > 0 &&
                                    t.max_noise > a.max_noise - 0.2 &&
                                    a.tot_noise < t.tot_noise + t.over_noise) ||
                                (a.max_noise > 0 &&
                                    t.max_noise > -0.05 &&
                                    t.max_noise > a.max_noise - 0.1 &&
                                    a.tot_noise + a.over_noise <
                                        t.tot_noise + t.over_noise) ||
                                (a.max_noise > 0 &&
                                    t.max_noise > -0.1 &&
                                    t.max_noise > a.max_noise - 0.15 &&
                                    a.tot_noise + a.over_noise + a.over_noise <
                                        t.tot_noise +
                                            t.over_noise +
                                            t.over_noise);
                            break;
                        case 5:
                            r =
                                a.over_noise < t.over_noise ||
                                (BitStream.EQ(a.over_noise, t.over_noise) &&
                                    a.tot_noise < t.tot_noise);
                            break;
                        case 6:
                            r =
                                a.over_noise < t.over_noise ||
                                (BitStream.EQ(a.over_noise, t.over_noise) &&
                                    (a.max_noise < t.max_noise ||
                                        (BitStream.EQ(
                                            a.max_noise,
                                            t.max_noise
                                        ) &&
                                            a.tot_noise <= t.tot_noise)));
                            break;
                        case 7:
                            r =
                                a.over_count < t.over_count ||
                                a.over_noise < t.over_noise;
                    }
                    return 0 == t.over_count && (r = r && a.bits < t.bits), r;
                }
                function S(e, t, s, r, i) {
                    var _ = e.internal_flags;
                    !(function (e, t, a, n, s) {
                        var r,
                            i = e.internal_flags;
                        r =
                            0 == t.scalefac_scale
                                ? 1.2968395546510096
                                : 1.6817928305074292;
                        for (var o = 0, _ = 0; _ < t.sfbmax; _++)
                            o < a[_] && (o = a[_]);
                        var l = i.noise_shaping_amp;
                        switch ((3 == l && (l = s ? 2 : 1), l)) {
                            case 2:
                                break;
                            case 1:
                                o > 1 ? (o = Math.pow(o, 0.5)) : (o *= 0.95);
                                break;
                            case 0:
                            default:
                                o > 1 ? (o = 1) : (o *= 0.95);
                        }
                        var f = 0;
                        for (_ = 0; _ < t.sfbmax; _++) {
                            var c,
                                u = t.width[_];
                            if (((f += u), !(a[_] < o))) {
                                if (
                                    0 != (2 & i.substep_shaping) &&
                                    ((i.pseudohalf[_] =
                                        0 == i.pseudohalf[_] ? 1 : 0),
                                    0 == i.pseudohalf[_] &&
                                        2 == i.noise_shaping_amp)
                                )
                                    return;
                                for (t.scalefac[_]++, c = -u; c < 0; c++)
                                    (n[f + c] *= r),
                                        n[f + c] > t.xrpow_max &&
                                            (t.xrpow_max = n[f + c]);
                                if (2 == i.noise_shaping_amp) return;
                            }
                        }
                    })(e, t, s, r, i);
                    var f = v(t);
                    return (
                        !f &&
                        (!(f =
                            2 == _.mode_gr
                                ? n.scale_bitcount(t)
                                : n.scale_bitcount_lsf(_, t)) ||
                            (_.noise_shaping > 1 &&
                                (o.fill(_.pseudohalf, 0),
                                0 == t.scalefac_scale
                                    ? (!(function (e, t) {
                                          for (
                                              var n = 0, s = 0;
                                              s < e.sfbmax;
                                              s++
                                          ) {
                                              var r = e.width[s],
                                                  i = e.scalefac[s];
                                              if (
                                                  (0 != e.preflag &&
                                                      (i += a.pretab[s]),
                                                  (n += r),
                                                  0 != (1 & i))
                                              ) {
                                                  i++;
                                                  for (var o = -r; o < 0; o++)
                                                      (t[
                                                          n + o
                                                      ] *= 1.2968395546510096),
                                                          t[n + o] >
                                                              e.xrpow_max &&
                                                              (e.xrpow_max =
                                                                  t[n + o]);
                                              }
                                              e.scalefac[s] = i >> 1;
                                          }
                                          (e.preflag = 0),
                                              (e.scalefac_scale = 1);
                                      })(t, r),
                                      (f = !1))
                                    : t.block_type == h.SHORT_TYPE &&
                                      _.subblock_gain > 0 &&
                                      (f =
                                          (function (e, t, n) {
                                              var s,
                                                  r = t.scalefac;
                                              for (s = 0; s < t.sfb_lmax; s++)
                                                  if (r[s] >= 16) return !0;
                                              for (var i = 0; i < 3; i++) {
                                                  var o = 0,
                                                      _ = 0;
                                                  for (
                                                      s = t.sfb_lmax + i;
                                                      s < t.sfbdivide;
                                                      s += 3
                                                  )
                                                      o < r[s] && (o = r[s]);
                                                  for (; s < t.sfbmax; s += 3)
                                                      _ < r[s] && (_ = r[s]);
                                                  if (!(o < 16 && _ < 8)) {
                                                      if (
                                                          t.subblock_gain[i] >=
                                                          7
                                                      )
                                                          return !0;
                                                      t.subblock_gain[i]++;
                                                      var f =
                                                          e.scalefac_band.l[
                                                              t.sfb_lmax
                                                          ];
                                                      for (
                                                          s = t.sfb_lmax + i;
                                                          s < t.sfbmax;
                                                          s += 3
                                                      ) {
                                                          var c = t.width[s],
                                                              u = r[s];
                                                          if (
                                                              (l(u >= 0),
                                                              (u -=
                                                                  4 >>
                                                                  t.scalefac_scale) >=
                                                                  0)
                                                          )
                                                              (r[s] = u),
                                                                  (f += 3 * c);
                                                          else {
                                                              r[s] = 0;
                                                              var h =
                                                                  210 +
                                                                  (u <<
                                                                      (t.scalefac_scale +
                                                                          1));
                                                              (b = a.IPOW20(h)),
                                                                  (f +=
                                                                      c *
                                                                      (i + 1));
                                                              for (
                                                                  var p = -c;
                                                                  p < 0;
                                                                  p++
                                                              )
                                                                  (n[f + p] *=
                                                                      b),
                                                                      n[f + p] >
                                                                          t.xrpow_max &&
                                                                          (t.xrpow_max =
                                                                              n[
                                                                                  f +
                                                                                      p
                                                                              ]);
                                                              f +=
                                                                  c *
                                                                  (3 - i - 1);
                                                          }
                                                      }
                                                      var b = a.IPOW20(202);
                                                      f += t.width[s] * (i + 1);
                                                      for (
                                                          p = -t.width[s];
                                                          p < 0;
                                                          p++
                                                      )
                                                          (n[f + p] *= b),
                                                              n[f + p] >
                                                                  t.xrpow_max &&
                                                                  (t.xrpow_max =
                                                                      n[f + p]);
                                                  }
                                              }
                                              return !1;
                                          })(_, t, r) || v(t))),
                            f ||
                                (f =
                                    2 == _.mode_gr
                                        ? n.scale_bitcount(t)
                                        : n.scale_bitcount_lsf(_, t)),
                            !f))
                    );
                }
                (this.setModules = function (s, r, i, o) {
                    (e = s),
                        (t = r),
                        (this.rv = r),
                        (a = i),
                        (this.qupvt = i),
                        (n = o),
                        m.setModules(a, n);
                }),
                    (this.ms_convert = function (e, t) {
                        for (var a = 0; a < 576; ++a) {
                            var n = e.tt[t][0].xr[a],
                                s = e.tt[t][1].xr[a];
                            (e.tt[t][0].xr[a] = (n + s) * (0.5 * i.SQRT2)),
                                (e.tt[t][1].xr[a] = (n - s) * (0.5 * i.SQRT2));
                        }
                    }),
                    (this.init_xrpow = function (e, t, a) {
                        var n = 0,
                            s = 0 | t.max_nonzero_coeff;
                        if (
                            (l(null != a),
                            (t.xrpow_max = 0),
                            l(0 <= s && s <= 575),
                            o.fill(a, s, 576, 0),
                            (n = (function (e, t, a, n) {
                                n = 0;
                                for (var s = 0; s <= a; ++s) {
                                    var r = Math.abs(e.xr[s]);
                                    (n += r),
                                        (t[s] = Math.sqrt(r * Math.sqrt(r))),
                                        t[s] > e.xrpow_max &&
                                            (e.xrpow_max = t[s]);
                                }
                                return n;
                            })(t, a, s, n)) > 1e-20)
                        ) {
                            var r = 0;
                            0 != (2 & e.substep_shaping) && (r = 1);
                            for (var i = 0; i < t.psymax; i++)
                                e.pseudohalf[i] = r;
                            return !0;
                        }
                        return o.fill(t.l3_enc, 0, 576, 0), !1;
                    }),
                    (this.init_outer_loop = function (e, t) {
                        (t.part2_3_length = 0),
                            (t.big_values = 0),
                            (t.count1 = 0),
                            (t.global_gain = 210),
                            (t.scalefac_compress = 0),
                            (t.table_select[0] = 0),
                            (t.table_select[1] = 0),
                            (t.table_select[2] = 0),
                            (t.subblock_gain[0] = 0),
                            (t.subblock_gain[1] = 0),
                            (t.subblock_gain[2] = 0),
                            (t.subblock_gain[3] = 0),
                            (t.region0_count = 0),
                            (t.region1_count = 0),
                            (t.preflag = 0),
                            (t.scalefac_scale = 0),
                            (t.count1table_select = 0),
                            (t.part2_length = 0),
                            (t.sfb_lmax = h.SBPSY_l),
                            (t.sfb_smin = h.SBPSY_s),
                            (t.psy_lmax = e.sfb21_extra
                                ? h.SBMAX_l
                                : h.SBPSY_l),
                            (t.psymax = t.psy_lmax),
                            (t.sfbmax = t.sfb_lmax),
                            (t.sfbdivide = 11);
                        for (var n = 0; n < h.SBMAX_l; n++)
                            (t.width[n] =
                                e.scalefac_band.l[n + 1] -
                                e.scalefac_band.l[n]),
                                (t.window[n] = 3);
                        if (t.block_type == h.SHORT_TYPE) {
                            var r = _(576);
                            (t.sfb_smin = 0),
                                (t.sfb_lmax = 0),
                                0 != t.mixed_block_flag &&
                                    ((t.sfb_smin = 3),
                                    (t.sfb_lmax = 2 * e.mode_gr + 4)),
                                (t.psymax =
                                    t.sfb_lmax +
                                    3 *
                                        ((e.sfb21_extra
                                            ? h.SBMAX_s
                                            : h.SBPSY_s) -
                                            t.sfb_smin)),
                                (t.sfbmax =
                                    t.sfb_lmax + 3 * (h.SBPSY_s - t.sfb_smin)),
                                (t.sfbdivide = t.sfbmax - 18),
                                (t.psy_lmax = t.sfb_lmax);
                            var i = e.scalefac_band.l[t.sfb_lmax];
                            s.arraycopy(t.xr, 0, r, 0, 576);
                            for (n = t.sfb_smin; n < h.SBMAX_s; n++)
                                for (
                                    var l = e.scalefac_band.s[n],
                                        f = e.scalefac_band.s[n + 1],
                                        c = 0;
                                    c < 3;
                                    c++
                                )
                                    for (var u = l; u < f; u++)
                                        t.xr[i++] = r[3 * u + c];
                            var p = t.sfb_lmax;
                            for (n = t.sfb_smin; n < h.SBMAX_s; n++)
                                (t.width[p] =
                                    t.width[p + 1] =
                                    t.width[p + 2] =
                                        e.scalefac_band.s[n + 1] -
                                        e.scalefac_band.s[n]),
                                    (t.window[p] = 0),
                                    (t.window[p + 1] = 1),
                                    (t.window[p + 2] = 2),
                                    (p += 3);
                        }
                        (t.count1bits = 0),
                            (t.sfb_partition_table = a.nr_of_sfb_block[0][0]),
                            (t.slen[0] = 0),
                            (t.slen[1] = 0),
                            (t.slen[2] = 0),
                            (t.slen[3] = 0),
                            (t.max_nonzero_coeff = 575),
                            o.fill(t.scalefac, 0),
                            (function (e, t) {
                                var n = e.ATH,
                                    s = t.xr;
                                if (t.block_type != h.SHORT_TYPE)
                                    for (
                                        var r = !1, i = h.PSFB21 - 1;
                                        i >= 0 && !r;
                                        i--
                                    ) {
                                        var o = e.scalefac_band.psfb21[i],
                                            _ = e.scalefac_band.psfb21[i + 1],
                                            l = a.athAdjust(
                                                n.adjust,
                                                n.psfb21[i],
                                                n.floor
                                            );
                                        e.nsPsy.longfact[21] > 1e-12 &&
                                            (l *= e.nsPsy.longfact[21]);
                                        for (var f = _ - 1; f >= o; f--) {
                                            if (!(Math.abs(s[f]) < l)) {
                                                r = !0;
                                                break;
                                            }
                                            s[f] = 0;
                                        }
                                    }
                                else
                                    for (var c = 0; c < 3; c++)
                                        for (
                                            r = !1, i = h.PSFB12 - 1;
                                            i >= 0 && !r;
                                            i--
                                        ) {
                                            _ =
                                                (o =
                                                    3 * e.scalefac_band.s[12] +
                                                    (e.scalefac_band.s[13] -
                                                        e.scalefac_band.s[12]) *
                                                        c +
                                                    (e.scalefac_band.psfb12[i] -
                                                        e.scalefac_band
                                                            .psfb12[0])) +
                                                (e.scalefac_band.psfb12[i + 1] -
                                                    e.scalefac_band.psfb12[i]);
                                            var u = a.athAdjust(
                                                n.adjust,
                                                n.psfb12[i],
                                                n.floor
                                            );
                                            e.nsPsy.shortfact[12] > 1e-12 &&
                                                (u *= e.nsPsy.shortfact[12]);
                                            for (f = _ - 1; f >= o; f--) {
                                                if (!(Math.abs(s[f]) < u)) {
                                                    r = !0;
                                                    break;
                                                }
                                                s[f] = 0;
                                            }
                                        }
                            })(e, t);
                    }),
                    (d.BINSEARCH_NONE = new d(0)),
                    (d.BINSEARCH_UP = new d(1)),
                    (d.BINSEARCH_DOWN = new d(2)),
                    (this.trancate_smallspectrums = function (e, t, s, r) {
                        var i = _(b.SFBMAX);
                        if (
                            (0 != (4 & e.substep_shaping) ||
                                t.block_type != h.SHORT_TYPE) &&
                            0 == (128 & e.substep_shaping)
                        ) {
                            a.calc_noise(t, s, i, new c(), null);
                            for (var l = 0; l < 576; l++) {
                                var f = 0;
                                0 != t.l3_enc[l] && (f = Math.abs(t.xr[l])),
                                    (r[l] = f);
                            }
                            l = 0;
                            var u = 8;
                            t.block_type == h.SHORT_TYPE && (u = 6);
                            do {
                                var p,
                                    m,
                                    d,
                                    v,
                                    g = t.width[u];
                                if (
                                    ((l += g),
                                    !(
                                        i[u] >= 1 ||
                                        (o.sort(r, l - g, g),
                                        BitStream.EQ(r[l - 1], 0))
                                    ))
                                ) {
                                    (p = (1 - i[u]) * s[u]), (m = 0), (v = 0);
                                    do {
                                        var S;
                                        for (
                                            d = 1;
                                            v + d < g &&
                                            !BitStream.NEQ(
                                                r[v + l - g],
                                                r[v + l + d - g]
                                            );
                                            d++
                                        );
                                        if (
                                            p <
                                            (S =
                                                r[v + l - g] * r[v + l - g] * d)
                                        ) {
                                            0 != v && (m = r[v + l - g - 1]);
                                            break;
                                        }
                                        (p -= S), (v += d);
                                    } while (v < g);
                                    if (!BitStream.EQ(m, 0))
                                        do {
                                            Math.abs(t.xr[l - g]) <= m &&
                                                (t.l3_enc[l - g] = 0);
                                        } while (--g > 0);
                                }
                            } while (++u < t.psymax);
                            t.part2_3_length = n.noquant_count_bits(e, t, null);
                        }
                    }),
                    (this.outer_loop = function (e, t, i, o, f, m) {
                        var v = e.internal_flags,
                            w = new p(),
                            M = _(576),
                            A = _(b.SFBMAX),
                            y = new c(),
                            R = new u(),
                            B = 9999999,
                            E = !1,
                            T = !1,
                            x = 0;
                        if (
                            ((function (e, t, a, s, r) {
                                var i,
                                    o = e.CurrentStep[s],
                                    _ = !1,
                                    f = e.OldValue[s],
                                    c = d.BINSEARCH_NONE;
                                for (
                                    t.global_gain = f,
                                        a -= t.part2_length,
                                        l(0 != o);
                                    ;

                                ) {
                                    var u;
                                    if (
                                        ((i = n.count_bits(e, r, t, null)),
                                        1 == o || i == a)
                                    )
                                        break;
                                    i > a
                                        ? (c == d.BINSEARCH_DOWN && (_ = !0),
                                          _ && (o /= 2),
                                          (c = d.BINSEARCH_UP),
                                          (u = o))
                                        : (c == d.BINSEARCH_UP && (_ = !0),
                                          _ && (o /= 2),
                                          (c = d.BINSEARCH_DOWN),
                                          (u = -o)),
                                        (t.global_gain += u),
                                        t.global_gain < 0 &&
                                            ((t.global_gain = 0), (_ = !0)),
                                        t.global_gain > 255 &&
                                            ((t.global_gain = 255), (_ = !0));
                                }
                                for (
                                    l(t.global_gain >= 0),
                                        l(t.global_gain < 256);
                                    i > a && t.global_gain < 255;

                                )
                                    t.global_gain++,
                                        (i = n.count_bits(e, r, t, null));
                                (e.CurrentStep[s] =
                                    f - t.global_gain >= 4 ? 4 : 2),
                                    (e.OldValue[s] = t.global_gain),
                                    (t.part2_3_length = i);
                            })(v, t, m, f, o),
                            0 == v.noise_shaping)
                        )
                            return 100;
                        a.calc_noise(t, i, A, y, R),
                            (y.bits = t.part2_3_length),
                            w.assign(t);
                        var k = 0;
                        for (s.arraycopy(o, 0, M, 0, 576); !E; ) {
                            do {
                                var P,
                                    I = new c(),
                                    V = 255;
                                if (
                                    ((P =
                                        0 != (2 & v.substep_shaping) ? 20 : 3),
                                    v.sfb21_extra)
                                ) {
                                    if (A[w.sfbmax] > 1) break;
                                    if (
                                        w.block_type == h.SHORT_TYPE &&
                                        (A[w.sfbmax + 1] > 1 ||
                                            A[w.sfbmax + 2] > 1)
                                    )
                                        break;
                                }
                                if (!S(e, w, A, o, T)) break;
                                0 != w.scalefac_scale && (V = 254);
                                var O = m - w.part2_length;
                                if (O <= 0) break;
                                for (
                                    ;
                                    (w.part2_3_length = n.count_bits(
                                        v,
                                        o,
                                        w,
                                        R
                                    )) > O && w.global_gain <= V;

                                )
                                    w.global_gain++;
                                if (w.global_gain > V) break;
                                if (0 == y.over_count) {
                                    for (
                                        ;
                                        (w.part2_3_length = n.count_bits(
                                            v,
                                            o,
                                            w,
                                            R
                                        )) > B && w.global_gain <= V;

                                    )
                                        w.global_gain++;
                                    if (w.global_gain > V) break;
                                }
                                if (
                                    (a.calc_noise(w, i, A, I, R),
                                    (I.bits = w.part2_3_length),
                                    0 !=
                                        (g(
                                            t.block_type != h.SHORT_TYPE
                                                ? e.quant_comp
                                                : e.quant_comp_short,
                                            y,
                                            I,
                                            w,
                                            A
                                        )
                                            ? 1
                                            : 0))
                                )
                                    (B = t.part2_3_length),
                                        (y = I),
                                        t.assign(w),
                                        (k = 0),
                                        s.arraycopy(o, 0, M, 0, 576);
                                else if (0 == v.full_outer_loop) {
                                    if (++k > P && 0 == y.over_count) break;
                                    if (3 == v.noise_shaping_amp && T && k > 30)
                                        break;
                                    if (
                                        3 == v.noise_shaping_amp &&
                                        T &&
                                        w.global_gain - x > 15
                                    )
                                        break;
                                }
                            } while (w.global_gain + w.scalefac_scale < 255);
                            3 == v.noise_shaping_amp
                                ? T
                                    ? (E = !0)
                                    : (w.assign(t),
                                      s.arraycopy(M, 0, o, 0, 576),
                                      (k = 0),
                                      (x = w.global_gain),
                                      (T = !0))
                                : (E = !0);
                        }
                        return (
                            l(t.global_gain + t.scalefac_scale <= 255),
                            e.VBR == r.vbr_rh || e.VBR == r.vbr_mtrh
                                ? s.arraycopy(M, 0, o, 0, 576)
                                : 0 != (1 & v.substep_shaping) &&
                                  trancate_smallspectrums(v, t, i, o),
                            y.over_count
                        );
                    }),
                    (this.iteration_finish_one = function (e, a, s) {
                        var r = e.l3_side,
                            i = r.tt[a][s];
                        n.best_scalefac_store(e, a, s, r),
                            1 == e.use_best_huffman &&
                                n.best_huffman_divide(e, i),
                            t.ResvAdjust(e, i);
                    }),
                    (this.VBR_encode_granule = function (e, t, a, n, r, i, f) {
                        var c,
                            u = e.internal_flags,
                            h = new p(),
                            b = _(576),
                            m = f,
                            d = f + 1,
                            v = (f + i) / 2,
                            g = 0,
                            S = u.sfb21_extra;
                        l(m <= LameInternalFlags.MAX_BITS_PER_CHANNEL),
                            o.fill(h.l3_enc, 0);
                        do {
                            l(v >= i),
                                l(v <= f),
                                l(i <= f),
                                (u.sfb21_extra = !(v > m - 42) && S),
                                outer_loop(e, t, a, n, r, v) <= 0
                                    ? ((g = 1),
                                      (d = t.part2_3_length),
                                      h.assign(t),
                                      s.arraycopy(n, 0, b, 0, 576),
                                      (c = (f = d - 32) - i),
                                      (v = (f + i) / 2))
                                    : ((c = f - (i = v + 32)),
                                      (v = (f + i) / 2),
                                      0 != g &&
                                          ((g = 2),
                                          t.assign(h),
                                          s.arraycopy(b, 0, n, 0, 576)));
                        } while (c > 12);
                        (u.sfb21_extra = S),
                            2 == g &&
                                s.arraycopy(h.l3_enc, 0, t.l3_enc, 0, 576),
                            l(t.part2_3_length <= m);
                    }),
                    (this.get_framebits = function (a, n) {
                        var s = a.internal_flags;
                        s.bitrate_index = s.VBR_min_bitrate;
                        var r = e.getframebits(a);
                        (s.bitrate_index = 1), (r = e.getframebits(a));
                        for (var i = 1; i <= s.VBR_max_bitrate; i++) {
                            s.bitrate_index = i;
                            var o = new MeanBits(r);
                            (n[i] = t.ResvFrameBegin(a, o)), (r = o.bits);
                        }
                    }),
                    (this.VBR_old_prepare = function (
                        e,
                        n,
                        s,
                        r,
                        i,
                        o,
                        _,
                        l,
                        f
                    ) {
                        var c,
                            u = e.internal_flags,
                            p = 0,
                            b = 1,
                            m = 0;
                        u.bitrate_index = u.VBR_max_bitrate;
                        var d =
                            t.ResvFrameBegin(e, new MeanBits(0)) / u.mode_gr;
                        get_framebits(e, o);
                        for (var v = 0; v < u.mode_gr; v++) {
                            var g = a.on_pe(e, n, l[v], d, v, 0);
                            u.mode_ext == h.MPG_MD_MS_LR &&
                                (ms_convert(u.l3_side, v),
                                a.reduce_side(l[v], s[v], d, g));
                            for (var S = 0; S < u.channels_out; ++S) {
                                var w = u.l3_side.tt[v][S];
                                w.block_type != h.SHORT_TYPE
                                    ? ((p =
                                          1.28 /
                                              (1 +
                                                  Math.exp(
                                                      3.5 - n[v][S] / 300
                                                  )) -
                                          0.05),
                                      (c = u.PSY.mask_adjust - p))
                                    : ((p =
                                          2.56 /
                                              (1 +
                                                  Math.exp(
                                                      3.5 - n[v][S] / 300
                                                  )) -
                                          0.14),
                                      (c = u.PSY.mask_adjust_short - p)),
                                    (u.masking_lower = Math.pow(10, 0.1 * c)),
                                    init_outer_loop(u, w),
                                    (f[v][S] = a.calc_xmin(
                                        e,
                                        r[v][S],
                                        w,
                                        i[v][S]
                                    )),
                                    0 != f[v][S] && (b = 0),
                                    (_[v][S] = 126),
                                    (m += l[v][S]);
                            }
                        }
                        for (v = 0; v < u.mode_gr; v++)
                            for (S = 0; S < u.channels_out; S++)
                                m > o[u.VBR_max_bitrate] &&
                                    ((l[v][S] *= o[u.VBR_max_bitrate]),
                                    (l[v][S] /= m)),
                                    _[v][S] > l[v][S] && (_[v][S] = l[v][S]);
                        return b;
                    }),
                    (this.bitpressure_strategy = function (e, t, a, n) {
                        for (var s = 0; s < e.mode_gr; s++)
                            for (var r = 0; r < e.channels_out; r++) {
                                for (
                                    var i = e.l3_side.tt[s][r],
                                        o = t[s][r],
                                        _ = 0,
                                        l = 0;
                                    l < i.psy_lmax;
                                    l++
                                )
                                    o[_++] *=
                                        1 +
                                        (0.029 * l * l) / h.SBMAX_l / h.SBMAX_l;
                                if (i.block_type == h.SHORT_TYPE)
                                    for (l = i.sfb_smin; l < h.SBMAX_s; l++)
                                        (o[_++] *=
                                            1 +
                                            (0.029 * l * l) /
                                                h.SBMAX_s /
                                                h.SBMAX_s),
                                            (o[_++] *=
                                                1 +
                                                (0.029 * l * l) /
                                                    h.SBMAX_s /
                                                    h.SBMAX_s),
                                            (o[_++] *=
                                                1 +
                                                (0.029 * l * l) /
                                                    h.SBMAX_s /
                                                    h.SBMAX_s);
                                n[s][r] = 0 | Math.max(a[s][r], 0.9 * n[s][r]);
                            }
                    }),
                    (this.VBR_new_prepare = function (e, n, s, r, i, o) {
                        var _,
                            l = e.internal_flags,
                            f = 1,
                            c = 0,
                            u = 0;
                        if (e.free_format) {
                            l.bitrate_index = 0;
                            p = new MeanBits(c);
                            (_ = t.ResvFrameBegin(e, p)),
                                (c = p.bits),
                                (i[0] = _);
                        } else {
                            l.bitrate_index = l.VBR_max_bitrate;
                            var p = new MeanBits(c);
                            t.ResvFrameBegin(e, p),
                                (c = p.bits),
                                get_framebits(e, i),
                                (_ = i[l.VBR_max_bitrate]);
                        }
                        for (var b = 0; b < l.mode_gr; b++) {
                            a.on_pe(e, n, o[b], c, b, 0),
                                l.mode_ext == h.MPG_MD_MS_LR &&
                                    ms_convert(l.l3_side, b);
                            for (var m = 0; m < l.channels_out; ++m) {
                                var d = l.l3_side.tt[b][m];
                                (l.masking_lower = Math.pow(
                                    10,
                                    0.1 * l.PSY.mask_adjust
                                )),
                                    init_outer_loop(l, d),
                                    0 != a.calc_xmin(e, s[b][m], d, r[b][m]) &&
                                        (f = 0),
                                    (u += o[b][m]);
                            }
                        }
                        for (b = 0; b < l.mode_gr; b++)
                            for (m = 0; m < l.channels_out; m++)
                                u > _ && ((o[b][m] *= _), (o[b][m] /= u));
                        return f;
                    }),
                    (this.calc_target_bits = function (n, s, r, i, o, _) {
                        var l,
                            f,
                            c,
                            u,
                            p = n.internal_flags,
                            b = p.l3_side,
                            m = 0;
                        p.bitrate_index = p.VBR_max_bitrate;
                        var d = new MeanBits(m);
                        for (
                            _[0] = t.ResvFrameBegin(n, d),
                                m = d.bits,
                                p.bitrate_index = 1,
                                m = e.getframebits(n) - 8 * p.sideinfo_len,
                                o[0] = m / (p.mode_gr * p.channels_out),
                                m = n.VBR_mean_bitrate_kbps * n.framesize * 1e3,
                                0 != (1 & p.substep_shaping) && (m *= 1.09),
                                m /= n.out_samplerate,
                                m -= 8 * p.sideinfo_len,
                                m /= p.mode_gr * p.channels_out,
                                (l =
                                    0.93 +
                                    (0.07 * (11 - n.compression_ratio)) / 5.5) <
                                    0.9 && (l = 0.9),
                                l > 1 && (l = 1),
                                f = 0;
                            f < p.mode_gr;
                            f++
                        ) {
                            var v = 0;
                            for (c = 0; c < p.channels_out; c++) {
                                if (((i[f][c] = int(l * m)), s[f][c] > 700)) {
                                    var g = int((s[f][c] - 700) / 1.4),
                                        S = b.tt[f][c];
                                    (i[f][c] = int(l * m)),
                                        S.block_type == h.SHORT_TYPE &&
                                            g < m / 2 &&
                                            (g = m / 2),
                                        g > (3 * m) / 2
                                            ? (g = (3 * m) / 2)
                                            : g < 0 && (g = 0),
                                        (i[f][c] += g);
                                }
                                i[f][c] >
                                    LameInternalFlags.MAX_BITS_PER_CHANNEL &&
                                    (i[f][c] =
                                        LameInternalFlags.MAX_BITS_PER_CHANNEL),
                                    (v += i[f][c]);
                            }
                            if (v > LameInternalFlags.MAX_BITS_PER_GRANULE)
                                for (c = 0; c < p.channels_out; ++c)
                                    (i[f][c] *=
                                        LameInternalFlags.MAX_BITS_PER_GRANULE),
                                        (i[f][c] /= v);
                        }
                        if (p.mode_ext == h.MPG_MD_MS_LR)
                            for (f = 0; f < p.mode_gr; f++)
                                a.reduce_side(
                                    i[f],
                                    r[f],
                                    m * p.channels_out,
                                    LameInternalFlags.MAX_BITS_PER_GRANULE
                                );
                        for (u = 0, f = 0; f < p.mode_gr; f++)
                            for (c = 0; c < p.channels_out; c++)
                                i[f][c] >
                                    LameInternalFlags.MAX_BITS_PER_CHANNEL &&
                                    (i[f][c] =
                                        LameInternalFlags.MAX_BITS_PER_CHANNEL),
                                    (u += i[f][c]);
                        if (u > _[0])
                            for (f = 0; f < p.mode_gr; f++)
                                for (c = 0; c < p.channels_out; c++)
                                    (i[f][c] *= _[0]), (i[f][c] /= u);
                    });
            };
        },
        function (e, t) {
            e.exports = function () {
                this.setModules = function (e, t) {
                    e, t;
                };
            };
        },
        function (e, t) {
            e.exports = function () {
                (this.over_noise = 0),
                    (this.tot_noise = 0),
                    (this.max_noise = 0),
                    (this.over_count = 0),
                    (this.over_SSD = 0),
                    (this.bits = 0);
            };
        },
        function (e, t, a) {
            var n = a(0),
                s = n.new_float,
                r = n.new_int;
            n.assert;
            e.exports = function () {
                (this.global_gain = 0),
                    (this.sfb_count1 = 0),
                    (this.step = r(39)),
                    (this.noise = s(39)),
                    (this.noise_log = s(39));
            };
        },
        function (e, t, a) {
            var n = a(0).assert;
            e.exports = function () {
                var e;
                (this.setModules = function (t) {
                    e = t;
                }),
                    (this.ResvFrameBegin = function (t, a) {
                        var s,
                            r = t.internal_flags,
                            i = r.l3_side,
                            o = e.getframebits(t);
                        a.bits = (o - 8 * r.sideinfo_len) / r.mode_gr;
                        var _ = 2048 * r.mode_gr - 8;
                        t.brate > 320
                            ? (s =
                                  8 *
                                  int(
                                      (1e3 * t.brate) /
                                          (t.out_samplerate / 1152) /
                                          8 +
                                          0.5
                                  ))
                            : ((s = 11520),
                              t.strict_ISO &&
                                  (s =
                                      8 *
                                      int(
                                          32e4 / (t.out_samplerate / 1152) / 8 +
                                              0.5
                                      ))),
                            (r.ResvMax = s - o),
                            r.ResvMax > _ && (r.ResvMax = _),
                            (r.ResvMax < 0 || t.disable_reservoir) &&
                                (r.ResvMax = 0);
                        var l =
                            a.bits * r.mode_gr +
                            Math.min(r.ResvSize, r.ResvMax);
                        return (
                            l > s && (l = s),
                            n(0 == r.ResvMax % 8),
                            n(r.ResvMax >= 0),
                            (i.resvDrain_pre = 0),
                            null != r.pinfo &&
                                ((r.pinfo.mean_bits = a.bits / 2),
                                (r.pinfo.resvsize = r.ResvSize)),
                            l
                        );
                    }),
                    (this.ResvMaxBits = function (e, t, a, n) {
                        var s,
                            r = e.internal_flags,
                            i = r.ResvSize,
                            o = r.ResvMax;
                        0 != n && (i += t),
                            0 != (1 & r.substep_shaping) && (o *= 0.9),
                            (a.bits = t),
                            10 * i > 9 * o
                                ? ((s = i - (9 * o) / 10),
                                  (a.bits += s),
                                  (r.substep_shaping |= 128))
                                : ((s = 0),
                                  (r.substep_shaping &= 127),
                                  e.disable_reservoir ||
                                      0 != (1 & r.substep_shaping) ||
                                      (a.bits -= 0.1 * t));
                        var _ =
                            i < (6 * r.ResvMax) / 10 ? i : (6 * r.ResvMax) / 10;
                        return (_ -= s) < 0 && (_ = 0), _;
                    }),
                    (this.ResvAdjust = function (e, t) {
                        e.ResvSize -= t.part2_3_length + t.part2_length;
                    }),
                    (this.ResvFrameEnd = function (e, t) {
                        var a,
                            s = e.l3_side;
                        e.ResvSize += t * e.mode_gr;
                        var r = 0;
                        (s.resvDrain_post = 0),
                            (s.resvDrain_pre = 0),
                            0 != (a = e.ResvSize % 8) && (r += a),
                            (a = e.ResvSize - r - e.ResvMax) > 0 &&
                                (n(0 == a % 8), n(a >= 0), (r += a));
                        var i = Math.min(8 * s.main_data_begin, r) / 8;
                        (s.resvDrain_pre += 8 * i),
                            (r -= 8 * i),
                            (e.ResvSize -= 8 * i),
                            (s.main_data_begin -= i),
                            (s.resvDrain_post += r),
                            (e.ResvSize -= r);
                    });
            };
        },
        function (e, t) {
            e.exports = function () {
                (this.getLameVersion = function () {
                    return "3.98.4";
                }),
                    (this.getLameShortVersion = function () {
                        return "3.98.4";
                    }),
                    (this.getLameVeryShortVersion = function () {
                        return "LAME3.98r";
                    }),
                    (this.getPsyVersion = function () {
                        return "0.93";
                    }),
                    (this.getLameUrl = function () {
                        return "http://www.mp3dev.org/";
                    }),
                    (this.getLameOsBitness = function () {
                        return "32bits";
                    });
            };
        },
        function (e, t, a) {
            var n = a(0),
                s = n.System,
                r = n.VbrMode,
                i = (n.Float, n.ShortBlock),
                o = (n.Util, n.Arrays),
                _ = (n.new_array_n, n.new_byte),
                l =
                    (n.new_double,
                    n.new_float,
                    n.new_float_n,
                    n.new_int,
                    n.new_int_n,
                    n.assert);
            function f() {
                var e, t, a;
                this.setModules = function (n, s, r) {
                    (e = n), (t = s), (a = r);
                };
                var n = f.NUMTOCENTRIES,
                    c = f.MAXFRAMESIZE,
                    u =
                        n +
                        4 +
                        4 +
                        4 +
                        4 +
                        4 +
                        9 +
                        1 +
                        1 +
                        8 +
                        1 +
                        1 +
                        3 +
                        1 +
                        1 +
                        2 +
                        4 +
                        2 +
                        2,
                    h = [
                        0, 49345, 49537, 320, 49921, 960, 640, 49729, 50689,
                        1728, 1920, 51009, 1280, 50625, 50305, 1088, 52225,
                        3264, 3456, 52545, 3840, 53185, 52865, 3648, 2560,
                        51905, 52097, 2880, 51457, 2496, 2176, 51265, 55297,
                        6336, 6528, 55617, 6912, 56257, 55937, 6720, 7680,
                        57025, 57217, 8e3, 56577, 7616, 7296, 56385, 5120,
                        54465, 54657, 5440, 55041, 6080, 5760, 54849, 53761,
                        4800, 4992, 54081, 4352, 53697, 53377, 4160, 61441,
                        12480, 12672, 61761, 13056, 62401, 62081, 12864, 13824,
                        63169, 63361, 14144, 62721, 13760, 13440, 62529, 15360,
                        64705, 64897, 15680, 65281, 16320, 16e3, 65089, 64001,
                        15040, 15232, 64321, 14592, 63937, 63617, 14400, 10240,
                        59585, 59777, 10560, 60161, 11200, 10880, 59969, 60929,
                        11968, 12160, 61249, 11520, 60865, 60545, 11328, 58369,
                        9408, 9600, 58689, 9984, 59329, 59009, 9792, 8704,
                        58049, 58241, 9024, 57601, 8640, 8320, 57409, 40961,
                        24768, 24960, 41281, 25344, 41921, 41601, 25152, 26112,
                        42689, 42881, 26432, 42241, 26048, 25728, 42049, 27648,
                        44225, 44417, 27968, 44801, 28608, 28288, 44609, 43521,
                        27328, 27520, 43841, 26880, 43457, 43137, 26688, 30720,
                        47297, 47489, 31040, 47873, 31680, 31360, 47681, 48641,
                        32448, 32640, 48961, 32e3, 48577, 48257, 31808, 46081,
                        29888, 30080, 46401, 30464, 47041, 46721, 30272, 29184,
                        45761, 45953, 29504, 45313, 29120, 28800, 45121, 20480,
                        37057, 37249, 20800, 37633, 21440, 21120, 37441, 38401,
                        22208, 22400, 38721, 21760, 38337, 38017, 21568, 39937,
                        23744, 23936, 40257, 24320, 40897, 40577, 24128, 23040,
                        39617, 39809, 23360, 39169, 22976, 22656, 38977, 34817,
                        18624, 18816, 35137, 19200, 35777, 35457, 19008, 19968,
                        36545, 36737, 20288, 36097, 19904, 19584, 35905, 17408,
                        33985, 34177, 17728, 34561, 18368, 18048, 34369, 33281,
                        17088, 17280, 33601, 16640, 33217, 32897, 16448,
                    ];
                function p(e, t) {
                    var a = 255 & e[t + 0];
                    return (
                        (a <<= 8),
                        (a |= 255 & e[t + 1]),
                        (a <<= 8),
                        (a |= 255 & e[t + 2]),
                        (a <<= 8),
                        (a |= 255 & e[t + 3])
                    );
                }
                function b(e, t, a) {
                    (e[t + 0] = 255 & (a >> 24)),
                        (e[t + 1] = 255 & (a >> 16)),
                        (e[t + 2] = 255 & (a >> 8)),
                        (e[t + 3] = 255 & a);
                }
                function m(e, t, a) {
                    (e[t + 0] = 255 & (a >> 8)), (e[t + 1] = 255 & a);
                }
                function d(e, t, a) {
                    return 255 & ((e << t) | (a & ~(-1 << t)));
                }
                function v(t, a) {
                    var n = t.internal_flags;
                    (a[0] = d(a[0], 8, 255)),
                        (a[1] = d(a[1], 3, 7)),
                        (a[1] = d(a[1], 1, t.out_samplerate < 16e3 ? 0 : 1)),
                        (a[1] = d(a[1], 1, t.version)),
                        (a[1] = d(a[1], 2, 1)),
                        (a[1] = d(a[1], 1, t.error_protection ? 0 : 1)),
                        (a[2] = d(a[2], 4, n.bitrate_index)),
                        (a[2] = d(a[2], 2, n.samplerate_index)),
                        (a[2] = d(a[2], 1, 0)),
                        (a[2] = d(a[2], 1, t.extension)),
                        (a[3] = d(a[3], 2, t.mode.ordinal())),
                        (a[3] = d(a[3], 2, n.mode_ext)),
                        (a[3] = d(a[3], 1, t.copyright)),
                        (a[3] = d(a[3], 1, t.original)),
                        (a[3] = d(a[3], 2, t.emphasis)),
                        (a[0] = 255);
                    var s,
                        i,
                        o = 241 & a[1];
                    (s =
                        1 == t.version
                            ? 128
                            : t.out_samplerate < 16e3
                            ? 32
                            : 64),
                        t.VBR == r.vbr_off && (s = t.brate),
                        (i = t.free_format
                            ? 0
                            : 255 &
                              (16 *
                                  e.BitrateIndex(
                                      s,
                                      t.version,
                                      t.out_samplerate
                                  ))),
                        1 == t.version
                            ? ((a[1] = 255 & (10 | o)),
                              (o = 13 & a[2]),
                              (a[2] = 255 & (i | o)))
                            : ((a[1] = 255 & (2 | o)),
                              (o = 13 & a[2]),
                              (a[2] = 255 & (i | o)));
                }
                function g(e, t) {
                    return (t = (t >> 8) ^ h[255 & (t ^ e)]);
                }
                (this.addVbrFrame = function (e) {
                    var t = e.internal_flags,
                        a = Tables.bitrate_table[e.version][t.bitrate_index];
                    l(null != t.VBR_seek_table.bag),
                        (function (e, t) {
                            if (
                                (e.nVbrNumFrames++,
                                (e.sum += t),
                                e.seen++,
                                !(e.seen < e.want) &&
                                    (e.pos < e.size &&
                                        ((e.bag[e.pos] = e.sum),
                                        e.pos++,
                                        (e.seen = 0)),
                                    e.pos == e.size))
                            ) {
                                for (var a = 1; a < e.size; a += 2)
                                    e.bag[a / 2] = e.bag[a];
                                (e.want *= 2), (e.pos /= 2);
                            }
                        })(t.VBR_seek_table, a);
                }),
                    (this.getVbrTag = function (e) {
                        var t = new VBRTagData(),
                            a = 0;
                        t.flags = 0;
                        var s = (e[a + 1] >> 3) & 1,
                            r = (e[a + 2] >> 2) & 3,
                            i = (e[a + 3] >> 6) & 3,
                            o = (e[a + 2] >> 4) & 15;
                        if (
                            ((o = Tables.bitrate_table[s][o]),
                            e[a + 1] >> 4 == 14
                                ? (t.samprate = Tables.samplerate_table[2][r])
                                : (t.samprate = Tables.samplerate_table[s][r]),
                            !(function (e, t) {
                                return (
                                    new String(
                                        e,
                                        t,
                                        "Xing".length(),
                                        null
                                    ).equals("Xing") ||
                                    new String(
                                        e,
                                        t,
                                        "Info".length(),
                                        null
                                    ).equals("Info")
                                );
                            })(
                                e,
                                (a +=
                                    0 != s
                                        ? 3 != i
                                            ? 36
                                            : 21
                                        : 3 != i
                                        ? 21
                                        : 13)
                            ))
                        )
                            return null;
                        (a += 4), (t.hId = s);
                        var _ = (t.flags = p(e, a));
                        if (
                            ((a += 4),
                            0 != (1 & _) && ((t.frames = p(e, a)), (a += 4)),
                            0 != (2 & _) && ((t.bytes = p(e, a)), (a += 4)),
                            0 != (4 & _))
                        ) {
                            if (null != t.toc)
                                for (var l = 0; l < n; l++) t.toc[l] = e[a + l];
                            a += n;
                        }
                        (t.vbrScale = -1),
                            0 != (8 & _) && ((t.vbrScale = p(e, a)), (a += 4)),
                            (t.headersize = (72e3 * (s + 1) * o) / t.samprate);
                        var f = e[(a += 21) + 0] << 4;
                        f += e[a + 1] >> 4;
                        var c = (15 & e[a + 1]) << 8;
                        return (
                            (f < 0 || f > 3e3) && (f = -1),
                            ((c += 255 & e[a + 2]) < 0 || c > 3e3) && (c = -1),
                            (t.encDelay = f),
                            (t.encPadding = c),
                            t
                        );
                    }),
                    (this.InitVbrTag = function (e) {
                        var a,
                            n = e.internal_flags;
                        (a =
                            1 == e.version
                                ? 128
                                : e.out_samplerate < 16e3
                                ? 32
                                : 64),
                            e.VBR == r.vbr_off && (a = e.brate);
                        var s = (72e3 * (e.version + 1) * a) / e.out_samplerate,
                            i = n.sideinfo_len + u;
                        if (
                            ((n.VBR_seek_table.TotalFrameSize = s),
                            s < i || s > c)
                        )
                            e.bWriteVbrTag = !1;
                        else {
                            (n.VBR_seek_table.nVbrNumFrames = 0),
                                (n.VBR_seek_table.nBytesWritten = 0),
                                (n.VBR_seek_table.sum = 0),
                                (n.VBR_seek_table.seen = 0),
                                (n.VBR_seek_table.want = 1),
                                (n.VBR_seek_table.pos = 0),
                                null == n.VBR_seek_table.bag &&
                                    ((n.VBR_seek_table.bag = new int[400]()),
                                    (n.VBR_seek_table.size = 400));
                            var o = _(c);
                            v(e, o);
                            for (
                                var l = n.VBR_seek_table.TotalFrameSize, f = 0;
                                f < l;
                                ++f
                            )
                                t.add_dummy_byte(e, 255 & o[f], 1);
                        }
                    }),
                    (this.updateMusicCRC = function (e, t, a, n) {
                        for (var s = 0; s < n; ++s) e[0] = g(t[a + s], e[0]);
                    }),
                    (this.getLameTagFrame = function (e, l) {
                        var f = e.internal_flags;
                        if (!e.bWriteVbrTag) return 0;
                        if (f.Class_ID != Lame.LAME_ID) return 0;
                        if (f.VBR_seek_table.pos <= 0) return 0;
                        if (l.length < f.VBR_seek_table.TotalFrameSize)
                            return f.VBR_seek_table.TotalFrameSize;
                        o.fill(l, 0, f.VBR_seek_table.TotalFrameSize, 0),
                            v(e, l);
                        var c = _(n);
                        if (e.free_format)
                            for (var u = 1; u < n; ++u)
                                c[u] = 255 & ((255 * u) / 100);
                        else
                            !(function (e, t) {
                                if (!(e.pos <= 0))
                                    for (var a = 1; a < n; ++a) {
                                        var s = a / n,
                                            r = 0 | Math.floor(s * e.pos);
                                        r > e.pos - 1 && (r = e.pos - 1);
                                        var i = 0 | ((256 * e.bag[r]) / e.sum);
                                        i > 255 && (i = 255), (t[a] = 255 & i);
                                    }
                            })(f.VBR_seek_table, c);
                        var h = f.sideinfo_len;
                        e.error_protection && (h -= 2),
                            e.VBR == r.vbr_off
                                ? ((l[h++] = 255 & "Info".charAt(0)),
                                  (l[h++] = 255 & "Info".charAt(1)),
                                  (l[h++] = 255 & "Info".charAt(2)),
                                  (l[h++] = 255 & "Info".charAt(3)))
                                : ((l[h++] = 255 & "Xing".charAt(0)),
                                  (l[h++] = 255 & "Xing".charAt(1)),
                                  (l[h++] = 255 & "Xing".charAt(2)),
                                  (l[h++] = 255 & "Xing".charAt(3))),
                            b(l, h, 15),
                            b(l, (h += 4), f.VBR_seek_table.nVbrNumFrames),
                            (h += 4);
                        var p =
                            f.VBR_seek_table.nBytesWritten +
                            f.VBR_seek_table.TotalFrameSize;
                        b(l, h, 0 | p),
                            (h += 4),
                            s.arraycopy(c, 0, l, h, c.length),
                            (h += c.length),
                            e.error_protection && t.CRC_writeheader(f, l);
                        var d = 0;
                        for (u = 0; u < h; u++) d = g(l[u], d);
                        return (
                            (h += (function (e, t, n, s, r) {
                                var o,
                                    _,
                                    l,
                                    f,
                                    c,
                                    u = e.internal_flags,
                                    h = 0,
                                    p = e.encoder_delay,
                                    d = e.encoder_padding,
                                    v = 100 - 10 * e.VBR_q - e.quality,
                                    S = a.getLameVeryShortVersion(),
                                    w = [1, 5, 3, 2, 4, 0, 3],
                                    M =
                                        0 |
                                        (e.lowpassfreq / 100 + 0.5 > 255
                                            ? 255
                                            : e.lowpassfreq / 100 + 0.5),
                                    A = 0,
                                    y = 0,
                                    R = e.internal_flags.noise_shaping,
                                    B = 0,
                                    E = 0,
                                    T = 0,
                                    x = 0 != (1 & e.exp_nspsytune),
                                    k = 0 != (2 & e.exp_nspsytune),
                                    P = !1,
                                    I = !1,
                                    V = e.internal_flags.nogap_total,
                                    O = e.internal_flags.nogap_current,
                                    L = e.ATHtype;
                                switch (e.VBR) {
                                    case vbr_abr:
                                        c = e.VBR_mean_bitrate_kbps;
                                        break;
                                    case vbr_off:
                                        c = e.brate;
                                        break;
                                    default:
                                        c = e.VBR_min_bitrate_kbps;
                                }
                                switch (
                                    ((o =
                                        0 +
                                        (e.VBR.ordinal() < w.length
                                            ? w[e.VBR.ordinal()]
                                            : 0)),
                                    u.findReplayGain &&
                                        (u.RadioGain > 510 &&
                                            (u.RadioGain = 510),
                                        u.RadioGain < -510 &&
                                            (u.RadioGain = -510),
                                        (y = 8192),
                                        (y |= 3072),
                                        u.RadioGain >= 0
                                            ? (y |= u.RadioGain)
                                            : ((y |= 512),
                                              (y |= -u.RadioGain))),
                                    u.findPeakSample &&
                                        (A = Math.abs(
                                            0 |
                                                ((u.PeakSample / 32767) *
                                                    Math.pow(2, 23) +
                                                    0.5)
                                        )),
                                    -1 != V &&
                                        (O > 0 && (I = !0),
                                        O < V - 1 && (P = !0)),
                                    (f =
                                        L +
                                        ((x ? 1 : 0) << 4) +
                                        ((k ? 1 : 0) << 5) +
                                        ((P ? 1 : 0) << 6) +
                                        ((I ? 1 : 0) << 7)),
                                    v < 0 && (v = 0),
                                    e.mode)
                                ) {
                                    case MONO:
                                        B = 0;
                                        break;
                                    case STEREO:
                                        B = 1;
                                        break;
                                    case DUAL_CHANNEL:
                                        B = 2;
                                        break;
                                    case JOINT_STEREO:
                                        B = e.force_ms ? 4 : 3;
                                        break;
                                    case NOT_SET:
                                    default:
                                        B = 7;
                                }
                                (T =
                                    e.in_samplerate <= 32e3
                                        ? 0
                                        : 48e3 == e.in_samplerate
                                        ? 2
                                        : e.in_samplerate > 48e3
                                        ? 3
                                        : 1),
                                    (e.short_blocks == i.short_block_forced ||
                                        e.short_blocks ==
                                            i.short_block_dispensed ||
                                        (-1 == e.lowpassfreq &&
                                            -1 == e.highpassfreq) ||
                                        e.scale_left < e.scale_right ||
                                        e.scale_left > e.scale_right ||
                                        (e.disable_reservoir &&
                                            e.brate < 320) ||
                                        e.noATH ||
                                        e.ATHonly ||
                                        0 == L ||
                                        e.in_samplerate <= 32e3) &&
                                        (E = 1),
                                    (_ = R + (B << 2) + (E << 5) + (T << 6)),
                                    (l = u.nMusicCRC),
                                    b(n, s + h, v),
                                    (h += 4);
                                for (var H = 0; H < 9; H++)
                                    n[s + h + H] = 255 & S.charAt(H);
                                (n[s + (h += 9)] = 255 & o),
                                    (n[s + ++h] = 255 & M),
                                    b(n, s + ++h, A),
                                    m(n, s + (h += 4), y),
                                    m(n, s + (h += 2), 0),
                                    (n[s + (h += 2)] = 255 & f),
                                    (n[s + ++h] = c >= 255 ? 255 : 255 & c),
                                    (n[s + ++h] = 255 & (p >> 4)),
                                    (n[s + h + 1] =
                                        255 & ((p << 4) + (d >> 8))),
                                    (n[s + h + 2] = 255 & d),
                                    (n[s + (h += 3)] = 255 & _),
                                    h++,
                                    (n[s + h++] = 0),
                                    m(n, s + h, e.preset),
                                    b(n, s + (h += 2), t),
                                    m(n, s + (h += 4), l),
                                    (h += 2);
                                for (var N = 0; N < h; N++) r = g(n[s + N], r);
                                return m(n, s + h, r), (h += 2);
                            })(e, p, l, h, d)),
                            f.VBR_seek_table.TotalFrameSize
                        );
                    }),
                    (this.putVbrTag = function (e, t) {
                        if (e.internal_flags.VBR_seek_table.pos <= 0) return -1;
                        if ((t.seek(t.length()), 0 == t.length())) return -1;
                        var a = (function (e) {
                            e.seek(0);
                            var t = _(10);
                            return (
                                e.readFully(t),
                                new String(t, "ISO-8859-1").startsWith("ID3")
                                    ? 0
                                    : (((127 & t[6]) << 21) |
                                          ((127 & t[7]) << 14) |
                                          ((127 & t[8]) << 7) |
                                          (127 & t[9])) +
                                      t.length
                            );
                        })(t);
                        t.seek(a);
                        var n = _(c),
                            s = getLameTagFrame(e, n);
                        return s > n.length
                            ? -1
                            : (s < 1 || t.write(n, 0, s), 0);
                    });
            }
            (f.NUMTOCENTRIES = 100), (f.MAXFRAMESIZE = 2880), (e.exports = f);
        },
        function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = a(39),
                s = null,
                r = 0,
                i = 0,
                o = null,
                _ = null,
                l = null,
                f = !1,
                c = 0,
                u = function () {};
            function h() {
                return (
                    (f = !1),
                    o.decodeAudioData(
                        l.slice(0),
                        function (e) {
                            ((s = o.createBufferSource()).onended =
                                function () {
                                    f || ((c = o.currentTime - i + r), u());
                                }),
                                (s.buffer = e),
                                s.connect(_),
                                _.connect(o.destination),
                                s.start(0, r),
                                (i = o.currentTime);
                        },
                        function (e) {
                            n.throwError(e);
                        }
                    )
                );
            }
            function p() {
                s && (s.stop(), (s = null));
            }
            var b = (function () {
                function e() {}
                return (
                    (e.play = function (e) {
                        return (
                            o ||
                                ((o = new (window.AudioContext ||
                                    window.webkitAudioContext)()),
                                ((_ = o.createAnalyser()).fftSize = 2048)),
                            this.stopPlay(),
                            (l = e),
                            (c = 0),
                            h()
                        );
                    }),
                    (e.pausePlay = function () {
                        p(), (r += o.currentTime - i), (f = !0);
                    }),
                    (e.resumePlay = function () {
                        return h();
                    }),
                    (e.stopPlay = function () {
                        (r = 0), (l = null), p();
                    }),
                    (e.destroyPlay = function () {
                        this.stopPlay();
                    }),
                    (e.getAnalyseData = function () {
                        var e = new Uint8Array(_.frequencyBinCount);
                        return _.getByteTimeDomainData(e), e;
                    }),
                    (e.addPlayEnd = function (e) {
                        void 0 === e && (e = function () {}), (u = e);
                    }),
                    (e.getPlayTime = function () {
                        var e = f ? r : o.currentTime - i + r;
                        return c || e;
                    }),
                    e
                );
            })();
            t.default = b;
        },
        function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.throwError = void 0),
                (t.throwError = function (e) {
                    throw new Error(e);
                });
        },
        function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = a(9),
                s = a(41),
                r = (function () {
                    function e(t) {
                        var a = this;
                        void 0 === t && (t = {}),
                            (this.size = 0),
                            (this.lChannelData = []),
                            (this.lBuffer = []),
                            (this.rBuffer = []),
                            (this.tempPCM = []),
                            (this.isWorker = !1),
                            (this.inputSampleBits = 16),
                            (this.fileSize = 0),
                            (this.duration = 0),
                            (this.needRecord = !0),
                            (this.mergeDataView = function (e) {
                                for (var t = 0, n = 0; n < e.length; n++)
                                    t += e[n].byteLength;
                                var s = new ArrayBuffer(t),
                                    r = new DataView(s),
                                    i = 0;
                                for (n = 0; n < e.length; n++)
                                    for (
                                        var o = 0;
                                        o < e[n].byteLength;
                                        o += 2, i += 2
                                    )
                                        r.setInt16(
                                            i,
                                            e[n].getInt16(o, a.littleEdian),
                                            a.littleEdian
                                        );
                                return r;
                            });
                        var n,
                            r = new (window.AudioContext ||
                                window.webkitAudioContext)();
                        (this.inputSampleRate = r.sampleRate),
                            t.compiling &&
                                ((this.isWorker = t.compiling),
                                (this.currentWorker = new s.default()),
                                console.log("启用worker"),
                                (this.currentWorker.onmessage = function (e) {
                                    var t = e.data.pcm;
                                    console.log("得到的数据", t),
                                        a.tempPCM.push(t),
                                        console.log(
                                            "多个音频片段待合并",
                                            a.tempPCM
                                        ),
                                        (a.fileSize =
                                            t.byteLength * a.tempPCM.length);
                                })),
                            this.setNewOption(t),
                            (this.littleEdian =
                                ((n = new ArrayBuffer(2)),
                                new DataView(n).setInt16(0, 256, !0),
                                256 === new Int16Array(n)[0])),
                            e.initUserMedia();
                    }
                    return (
                        (e.prototype.setNewOption = function (e) {
                            void 0 === e && (e = {}),
                                (this.config = {
                                    sampleBits: ~[8, 16].indexOf(e.sampleBits)
                                        ? e.sampleBits
                                        : 16,
                                    sampleRate: ~[
                                        8e3, 11025, 16e3, 22050, 24e3, 44100,
                                        48e3,
                                    ].indexOf(e.sampleRate)
                                        ? e.sampleRate
                                        : this.inputSampleRate,
                                    numChannels: ~[1, 2].indexOf(e.numChannels)
                                        ? e.numChannels
                                        : 1,
                                }),
                                (this.outputSampleRate =
                                    this.config.sampleRate),
                                (this.oututSampleBits = this.config.sampleBits);
                        }),
                        (e.prototype.startRecord = function () {
                            var e = this;
                            return (
                                this.context && this.destroyRecord(),
                                this.initRecorder(),
                                navigator.mediaDevices
                                    .getUserMedia({ audio: !0 })
                                    .then(function (t) {
                                        (e.audioInput =
                                            e.context.createMediaStreamSource(
                                                t
                                            )),
                                            (e.stream = t);
                                    })
                                    .then(function () {
                                        e.audioInput.connect(e.analyser),
                                            e.analyser.connect(e.recorder),
                                            e.recorder.connect(
                                                e.context.destination
                                            );
                                    })
                            );
                        }),
                        (e.prototype.pauseRecord = function () {
                            this.needRecord = !1;
                        }),
                        (e.prototype.resumeRecord = function () {
                            this.needRecord = !0;
                        }),
                        (e.prototype.stopRecord = function () {
                            this.audioInput && this.audioInput.disconnect(),
                                this.source && this.source.stop(),
                                this.recorder.disconnect(),
                                this.analyser.disconnect(),
                                (this.needRecord = !0);
                        }),
                        (e.prototype.destroyRecord = function () {
                            return (
                                this.clearRecordStatus(),
                                this.stopStream(),
                                this.closeAudioContext()
                            );
                        }),
                        (e.prototype.getAnalyseData = function () {
                            var e = new Uint8Array(
                                this.analyser.frequencyBinCount
                            );
                            return this.analyser.getByteTimeDomainData(e), e;
                        }),
                        (e.prototype.getData = function () {
                            return this.flat();
                        }),
                        (e.prototype.clearRecordStatus = function () {
                            (this.lBuffer.length = 0),
                                (this.rBuffer.length = 0),
                                (this.size = 0),
                                (this.fileSize = 0),
                                (this.PCM = null),
                                (this.audioInput = null),
                                (this.duration = 0);
                        }),
                        (e.prototype.flat = function (e, t, a) {
                            if (
                                (void 0 === e && (e = []),
                                void 0 === t && (t = []),
                                void 0 === a && (a = 0),
                                a)
                            ) {
                                console.log("二维转一维度");
                                var n = null,
                                    s = new Float32Array(0);
                                1 === this.config.numChannels
                                    ? (n = new Float32Array(this.size))
                                    : ((n = new Float32Array(this.size / 2)),
                                      (s = new Float32Array(this.size / 2)));
                                for (var r = 0, i = 0; i < e.length; i++)
                                    n.set(e[i], r), (r += e[i].length);
                                r = 0;
                                for (i = 0; i < t.length; i++)
                                    s.set(t[i], r), (r += t[i].length);
                                return { left: n, right: s };
                            }
                            (n = null), (s = new Float32Array(0));
                            1 === this.config.numChannels
                                ? (n = new Float32Array(this.size))
                                : ((n = new Float32Array(this.size / 2)),
                                  (s = new Float32Array(this.size / 2)));
                            for (r = 0, i = 0; i < this.lBuffer.length; i++)
                                n.set(this.lBuffer[i], r),
                                    (r += this.lBuffer[i].length);
                            r = 0;
                            for (i = 0; i < this.rBuffer.length; i++)
                                s.set(this.rBuffer[i], r),
                                    (r += this.rBuffer[i].length);
                            return { left: n, right: s };
                        }),
                        (e.prototype.initRecorder = function () {
                            var e = this;
                            this.clearRecordStatus(),
                                (this.context = new (window.AudioContext ||
                                    window.webkitAudioContext)()),
                                (this.analyser = this.context.createAnalyser()),
                                (this.analyser.fftSize = 2048);
                            var t =
                                this.context.createScriptProcessor ||
                                this.context.createJavaScriptNode;
                            (this.recorder = t.apply(this.context, [
                                4096,
                                this.config.numChannels,
                                this.config.numChannels,
                            ])),
                                (this.recorder.onaudioprocess = function (t) {
                                    if (e.needRecord) {
                                        var a,
                                            n = t.inputBuffer.getChannelData(0),
                                            s = null;
                                        e.lChannelData.push(n),
                                            e.lBuffer.push(new Float32Array(n));
                                        var r = n.length,
                                            i = [];
                                        i.push(new Float32Array(n));
                                        var o = [];
                                        (e.size += n.length),
                                            2 === e.config.numChannels &&
                                                ((s =
                                                    t.inputBuffer.getChannelData(
                                                        1
                                                    )),
                                                e.rBuffer.push(
                                                    new Float32Array(s)
                                                ),
                                                o.push(new Float32Array(s)),
                                                (e.size += s.length),
                                                (r += s.length));
                                        var _ = {
                                            inputSampleRate: e.inputSampleRate,
                                            outputSampleRate:
                                                e.outputSampleRate,
                                            oututSampleBits: e.oututSampleBits,
                                            littleEdian: e.littleEdian,
                                        };
                                        e.isWorker &&
                                            e.currentWorker.postMessage({
                                                audioData: e.flat(i, o, r),
                                                config: _,
                                            }),
                                            e.config.compiling ||
                                                (e.fileSize =
                                                    Math.floor(
                                                        e.size /
                                                            Math.max(
                                                                e.inputSampleRate /
                                                                    e.outputSampleRate,
                                                                1
                                                            )
                                                    ) *
                                                    (e.oututSampleBits / 8)),
                                            (a = 100 * Math.max.apply(Math, n)),
                                            (e.duration +=
                                                4096 / e.inputSampleRate),
                                            e.onprocess &&
                                                e.onprocess(e.duration),
                                            e.onprogress &&
                                                e.onprogress({
                                                    duration: e.duration,
                                                    fileSize: e.fileSize,
                                                    vol: a,
                                                    lChannelData:
                                                        e.lChannelData,
                                                    data: e.tempPCM,
                                                });
                                    }
                                });
                        }),
                        (e.prototype.stopStream = function () {
                            this.stream &&
                                this.stream.getTracks &&
                                (this.stream.getTracks().forEach(function (e) {
                                    return e.stop();
                                }),
                                (this.stream = null));
                        }),
                        (e.prototype.closeAudioContext = function () {
                            return this.context &&
                                this.context.close &&
                                "closed" !== this.context.state
                                ? this.context.close()
                                : new Promise(function (e) {
                                      e();
                                  });
                        }),
                        (e.initUserMedia = function () {
                            void 0 === navigator.mediaDevices &&
                                (navigator.mediaDevices = {}),
                                void 0 ===
                                    navigator.mediaDevices.getUserMedia &&
                                    (navigator.mediaDevices.getUserMedia =
                                        function (e) {
                                            var t =
                                                navigator.getUserMedia ||
                                                navigator.webkitGetUserMedia ||
                                                navigator.mozGetUserMedia;
                                            return t
                                                ? new Promise(function (a, n) {
                                                      t.call(
                                                          navigator,
                                                          e,
                                                          a,
                                                          n
                                                      );
                                                  })
                                                : Promise.reject(
                                                      new Error(
                                                          "浏览器不支持 getUserMedia !"
                                                      )
                                                  );
                                        });
                        }),
                        (e.prototype.transformIntoPCM = function (e, t) {
                            var a = new Float32Array(e),
                                s = new Float32Array(t),
                                r = n.compress(
                                    { left: a, right: s },
                                    this.inputSampleRate,
                                    this.outputSampleRate
                                );
                            return n.encodePCM(
                                r,
                                this.oututSampleBits,
                                this.littleEdian
                            );
                        }),
                        (e.getPermission = function () {
                            return (
                                this.initUserMedia(),
                                navigator.mediaDevices
                                    .getUserMedia({ audio: !0 })
                                    .then(function (e) {
                                        e &&
                                            e.getTracks().forEach(function (e) {
                                                return e.stop();
                                            });
                                    })
                            );
                        }),
                        (e.prototype.getEncodedPCM = function () {
                            if (this.PCM) return this.PCM;
                            if (this.tempPCM.length) {
                                var e = this.mergeDataView(this.tempPCM);
                                return (this.PCM = e), e;
                            }
                            return null;
                        }),
                        e
                    );
                })();
            t.default = r;
        },
        function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            a(10);
            var n = self;
            (n.onmessage = function (e) {
                console.log("边录制边转", e);
                var t = e.data,
                    a = t.audioData,
                    s = t.config,
                    r = (function (e, t, a) {
                        var n = t / a,
                            s = Math.max(n, 1),
                            r = e.left,
                            i = e.right,
                            o = Math.floor((r.length + i.length) / n),
                            _ = new Float32Array(o),
                            l = 0,
                            f = 0;
                        for (; l < o; ) {
                            var c = Math.floor(f);
                            (_[l] = r[c]),
                                l++,
                                i.length && ((_[l] = i[c]), l++),
                                (f += s);
                        }
                        return _;
                    })(a, s.inputSampleRate, s.outputSampleRate);
                console.log("compressData", r);
                var i = (function (e, t, a) {
                    void 0 === a && (a = !0);
                    var n = 0,
                        s = e.length * (t / 8),
                        r = new ArrayBuffer(s),
                        i = new DataView(r);
                    if (8 === t)
                        for (var o = 0; o < e.length; o++, n++) {
                            var _ =
                                (l = Math.max(-1, Math.min(1, e[o]))) < 0
                                    ? 128 * l
                                    : 127 * l;
                            (_ = +_ + 128), i.setInt8(n, _);
                        }
                    else
                        for (o = 0; o < e.length; o++, n += 2) {
                            var l = Math.max(-1, Math.min(1, e[o]));
                            i.setInt16(n, l < 0 ? 32768 * l : 32767 * l, a);
                        }
                    return i;
                })(r, s.oututSampleBits, s.littleEdian);
                n.postMessage({ pcm: i });
            }),
                (t.default = null);
        },
    ]).default;
});
//# sourceMappingURL=recorder.js.map